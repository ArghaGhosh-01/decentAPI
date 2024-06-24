// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend, It is working yessss!!!! ok now what to do now? HACK 4 BENGAL', });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
