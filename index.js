import express from 'express';
const app = express();  

const port = 3000;
const sayHello = "Hello world!";
console.log(sayHello)

app.get('/', (req, res) => {
    console.log(sayHello)
    res.send(sayHello);
})
app.get('/hello', (req, res) => {
    console.log(sayHello)
    res.send(sayHello);
})

app.listen(port, () => {
  console.log(`Listen on port: http://localhost:${port}`);
})
