const mongoose = require('mongoose');

const { Schema } = mongoose;

const SentimentSchema = new Schema({
    score: Number,
    magnitude: Number
}, { timestamps: true });

SentimentSchema.methods.toJSON = function() {
  return {
    _id: this._id,
    // title: this.title,
    // body: this.body,
    // author: this.author,
    // createdAt: this.createdAt,
    // updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model('Sentiments', SentimentSchema,'sentiment');