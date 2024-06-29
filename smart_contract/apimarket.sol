// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC725 {
    function getKey(bytes32 _key) external view returns (uint256[] memory purposes, uint256 keyType, bytes32 key);
    function getKeyPurpose(bytes32 _key) external view returns (uint256 purpose);
    function getKeysByPurpose(uint256 _purpose) external view returns (bytes32[] memory keys);
    function addKey(bytes32 _key, uint256 _purpose, uint256 _keyType) external returns (bool success);
    function execute(uint256 _operationType, address _to, uint256 _value, bytes calldata _data) external returns (bytes32 executionId);
    function approve(bytes32 _id, bool _approve) external returns (bool success);
    function removeKey(bytes32 _key, uint256 _purpose) external returns (bool success);
    function updateKey(bytes32 _key, uint256 _purpose, uint256 _keyType) external returns (bool success);
    function subscribeToAPI(address apiProvider, uint256 price) external returns (bool success);
}

contract ERC725 is IERC725 {
    uint256 constant MANAGEMENT_KEY = 1;
    uint256 constant EXECUTION_KEY = 2;

    struct Key {
        uint256[] purposes;
        uint256 keyType;
        bytes32 key;
    }

    mapping(bytes32 => Key) keys;
    mapping(uint256 => bytes32[]) keysByPurpose;
    mapping(bytes32 => bool) executions;
    mapping(address => uint256) public apiSubscriptions; // To manage API subscriptions

    event KeyAdded(bytes32 indexed key, uint256 indexed purpose, uint256 keyType);
    event KeyRemoved(bytes32 indexed key, uint256 indexed purpose, uint256 keyType);
    event KeyUpdated(bytes32 indexed key, uint256 indexed purpose, uint256 keyType);
    event Executed(bytes32 indexed executionId, uint256 indexed operationType, address indexed to, uint256 value, bytes data);
    event Approved(bytes32 indexed id, bool approved);
    event SubscribedToAPI(address indexed apiProvider, address indexed subscriber, uint256 price);

    modifier onlyManagement() {
        require(keyHasPurpose(keccak256(abi.encodePacked(msg.sender)), MANAGEMENT_KEY), "Sender does not have management key");
        _;
    }

    constructor() {
        bytes32 key = keccak256(abi.encodePacked(msg.sender));
        keys[key].purposes = [MANAGEMENT_KEY];
        keys[key].keyType = 1;
        keys[key].key = key;
        keysByPurpose[MANAGEMENT_KEY].push(key);

        emit KeyAdded(key, MANAGEMENT_KEY, 1);
    }

    function getKey(bytes32 _key) public view override returns (uint256[] memory purposes, uint256 keyType, bytes32 key) {
        Key memory k = keys[_key];
        return (k.purposes, k.keyType, k.key);
    }

    function getKeyPurpose(bytes32 _key) public view override returns (uint256 purpose) {
        if (keys[_key].purposes.length > 0) {
            return keys[_key].purposes[0];
        }
        return 0;
    }

    function getKeysByPurpose(uint256 _purpose) public view override returns (bytes32[] memory _keys) {
        return keysByPurpose[_purpose];
    }

    function addKey(bytes32 _key, uint256 _purpose, uint256 _keyType) public override onlyManagement returns (bool success) {
        keys[_key].purposes.push(_purpose);
        keys[_key].keyType = _keyType;
        keys[_key].key = _key;
        keysByPurpose[_purpose].push(_key);

        emit KeyAdded(_key, _purpose, _keyType);
        return true;
    }

    function removeKey(bytes32 _key, uint256 _purpose) public override onlyManagement returns (bool success) {
        require(keys[_key].key != 0, "Key does not exist");
        uint256 keyPurposeIndex = findPurposeIndex(_key, _purpose);
        require(keyPurposeIndex < keys[_key].purposes.length, "Purpose not found");

        // Remove the purpose from the key
        keys[_key].purposes[keyPurposeIndex] = keys[_key].purposes[keys[_key].purposes.length - 1];
        keys[_key].purposes.pop();

        // If no more purposes, delete the key
        if (keys[_key].purposes.length == 0) {
            delete keys[_key];
        }

        // Remove key from keysByPurpose
        uint256 purposeKeyIndex = findKeyIndexByPurpose(_purpose, _key);
        keysByPurpose[_purpose][purposeKeyIndex] = keysByPurpose[_purpose][keysByPurpose[_purpose].length - 1];
        keysByPurpose[_purpose].pop();

        emit KeyRemoved(_key, _purpose, keys[_key].keyType);
        return true;
    }

    function updateKey(bytes32 _key, uint256 _purpose, uint256 _keyType) public override onlyManagement returns (bool success) {
        require(keys[_key].key != 0, "Key does not exist");

        // Update key type and purpose
        keys[_key].keyType = _keyType;
        if (!purposeExists(_key, _purpose)) {
            keys[_key].purposes.push(_purpose);
            keysByPurpose[_purpose].push(_key);
        }

        emit KeyUpdated(_key, _purpose, _keyType);
        return true;
    }

    function execute(uint256 _operationType, address _to, uint256 _value, bytes calldata _data) public override returns (bytes32 executionId) {
        require(keyHasPurpose(keccak256(abi.encodePacked(msg.sender)), EXECUTION_KEY), "Sender does not have execution key");

        executionId = keccak256(abi.encodePacked(_operationType, _to, _value, _data, block.timestamp));
        executions[executionId] = true;

        (bool success,) = _to.call{value: _value}(_data);
        require(success, "Execution failed");

        emit Executed(executionId, _operationType, _to, _value, _data);
    }

    function approve(bytes32 _id, bool _approve) public override onlyManagement returns (bool success) {
        require(executions[_id], "Execution ID not found");
        executions[_id] = _approve;

        emit Approved(_id, _approve);
        return true;
    }

    function subscribeToAPI(address apiProvider, uint256 price) public override returns (bool success) {
        require(price > 0, "Price must be greater than zero");
        require(msg.sender != apiProvider, "Cannot subscribe to own API");

        // Simulate payment by storing the subscription
        apiSubscriptions[apiProvider] += price;

        emit SubscribedToAPI(apiProvider, msg.sender, price);
        return true;
    }

    function keyHasPurpose(bytes32 _key, uint256 _purpose) internal view returns (bool exists) {
        if (keys[_key].purposes.length == 0) return false;
        for (uint i = 0; i < keys[_key].purposes.length; i++) {
            if (keys[_key].purposes[i] == _purpose) {
                return true;
            }
        }
        return false;
    }

    function findPurposeIndex(bytes32 _key, uint256 _purpose) internal view returns (uint256 index) {
        for (uint256 i = 0; i < keys[_key].purposes.length; i++) {
            if (keys[_key].purposes[i] == _purpose) {
                return i;
            }
        }
        revert("Purpose not found");
    }

    function findKeyIndexByPurpose(uint256 _purpose, bytes32 _key) internal view returns (uint256 index) {
        for (uint256 i = 0; i < keysByPurpose[_purpose].length; i++) {
            if (keysByPurpose[_purpose][i] == _key) {
                return i;
            }
        }
        revert("Key not found for this purpose");
    }

    function purposeExists(bytes32 _key, uint256 _purpose) internal view returns (bool exists) {
        for (uint256 i = 0; i < keys[_key].purposes.length; i++) {
            if (keys[_key].purposes[i] == _purpose) {
                return true;
            }
        }
        return false;
    }
}