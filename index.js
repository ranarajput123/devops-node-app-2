import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost'

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.send('Hello from app 1');
});

app.listen(PORT, () => { 
    console.log(`Server is running on http://${HOST}:${PORT}`);
})
