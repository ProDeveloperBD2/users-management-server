const express = require('express');
const app = express();
const port = process.env.PORT || 2300;
const cors = require('cors');
const users = [
    { id: 1, name: 'Shawon', email: 'shawon@gmail.com' },
    { id: 2, name: 'Shamim', email: 'shamim@gmail.com' },
    { id: 3, name: 'Abir', email: 'abir@gmail.com' }
];
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Users Management Server is Running')
})
app.get('/users', (req, res) => {
    res.send(users);
})
app.post('/users', (req, res) => {
    console.log('post api hitting')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})
app.listen(port, () => {
    console.log(`the server running on Port: ${port}`)
})