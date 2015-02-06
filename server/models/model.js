var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
    user_name: String,
    password: String,
    bucket: Array,
    hidden: Boolean
});

// Error validation?
Schema.path('user_name').required(true, 'User name cannot be blank');
mongoose.model('', Schema);

// var existingSchema = new mongoose.Schema({
//     name: String
// },{collection : ''});

// mongoose.model('', existingSchema);