const {Schema, model} = require('mongoose');

const smsSchema = new Schema({
  Body: {
    type: String,
    required: true
  },
  From: String,
  To: String,
},{
  timestamps: true
});

module.exports = model('sms', smsSchema); 