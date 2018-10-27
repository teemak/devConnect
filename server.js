const express  = require('express');
const app  = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const db = require('./config/keys').mongoURI;
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('DATABASE connected successfully'))
	.catch(err => console.log(err));

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
