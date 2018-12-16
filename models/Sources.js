const mongoose = require('mongoose');

const { Schema } = mongoose;

const SourcesSchema = new Schema({
    source_id: String,
    name: String,
}, { timestamps: true });

SourcesSchema.methods.toJSON = function() {
  return {
    _id: this._id,
    // title: this.title,
    // body: this.body,
    // author: this.author,
    // createdAt: this.createdAt,
    // updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model('Sources', SourcesSchema,'source');