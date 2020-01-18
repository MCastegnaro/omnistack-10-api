const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

// Configuracao do model de dev que o banco ira receber.
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

// Configuracao que diz que estamos exportando a entidade `Dev` com o schema `DevSchema`.
module.exports = mongoose.model('Dev', DevSchema);