const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const users = [
    {id: 1, name: "user1", email: "user1@mail.ru"},
    {id: 2, name: "user2", email: "user2@gmail.com"},
    {id: 3, name: "user3", email: "user3@bk.ru"},

]

app.get('/', function (req, res) {
    res.send('Hello World!1!!');
});

app.get('/api/users', function (req, res) {
    res.send(users);
});

app.post('/api/users', function (req, res) {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
    });

    const result = schema.validate(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    users.push(user);
    res.send(user);
})

app.get('/api/users/:id', function (req, res) {
    const user = users.find(us => us.id === parseInt(req.params.id));

    if(!user) {
        res.status(404).send('The user with the given ID was not found')
    }
    res.send(user);
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`Listening on port ${port} ...`)
});
