const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;
mongoose.plugin(mongoosePaginate);

const ArticlesSchema = new Schema({
    source: { type: mongoose.Schema.Types.ObjectId, ref: 'Sources', required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Authors', required: true },
    email: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
    content: String,
    sentiment: { type: mongoose.Schema.Types.ObjectId, ref: 'Sentiments', required: true },
}, { timestamps: true });

ArticlesSchema.methods.toJSON = function() {
  return {
    _id: this._id,
    // title: this.title,
    // body: this.body,
    // author: this.author,
    // createdAt: this.createdAt,
    // updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model('Articles', ArticlesSchema,'article');