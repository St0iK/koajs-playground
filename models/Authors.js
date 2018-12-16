const mongoose = require('mongoose');

const { Schema } = mongoose;

const AuthorsSchema = new Schema({
    email: String,
}, { timestamps: true });

AuthorsSchema.methods.toJSON = function() {
  return {
    _id: this._id,
    // title: this.title,
    // body: this.body,
    // author: this.author,
    // createdAt: this.createdAt,
    // updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model('Authors', AuthorsSchema,'author');