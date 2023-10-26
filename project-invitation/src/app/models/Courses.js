const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema(
    {
        title:{ type: String, require: true},
        name: { type: String, require: true },
        description: { type: String },
        time: { type: String, require: true },
        location: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        data: [{
            id: { type: String },
            type: { type: String, enum: ["text", "image"] },
            isRequired: {type: Boolean},
            value: { type: String },
        }],
        author: { type: String }
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);




