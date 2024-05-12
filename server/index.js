import dotenv from 'dotenv';
import express from 'express';
const app = express();

dotenv.config();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' });
});
app.listen(process.env.PORT, () => {
    console.log('Server is running on port');
});