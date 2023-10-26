const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Account = new Schema(
    {
        fullName: { type: String, require: true },
        userName: { type: String, require: true },
        password: { type: String, require: true },
        slug: { type: String, slug: 'userName', unique: true },
        image: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Account', Account);
