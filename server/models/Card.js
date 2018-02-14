//declare dependancies
const mongoose = require('mongoose')
// invoke Schema use
const Schema = mongoose.Schema;
// Make outline for each new Flashcard
const CardSchema = new Schema({
    prompt: {
      type: String,
      trim: true,
      required: true
    },
    response: {
      type: String,
      trim: true,
      required: true
    },
    topic: {
      type: String,
      trim: true
    }
})

const Card = mongoose.model('Card', CardSchema)

module.exports = Card;
