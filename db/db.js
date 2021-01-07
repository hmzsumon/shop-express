const mongoose = require('mongoose');

const dbUri = process.env.MONGO_URI || 'mongodb://localhost:27017/Acc';
// const dbUri = 'mongodb://localhost:27017/Acc';

if (!dbUri) {
	console.log('Mongo uri not set in env file');
	return new Error('Mongo uri not set in env file');
}

mongoose.connect(
	dbUri,
	{
		useNewUrlParser: true,
		useFindAndModify: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) {
			console.error(`failed to connect using mongoose ${err}`);
		} else {
			console.log(`connected to db server`);
		}
	}
);

module.exports = mongoose;
