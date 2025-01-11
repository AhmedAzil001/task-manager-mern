const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());



app.listen(PORT, (req,res) => {
    console.log(`Server running on port : ${PORT}`);
})