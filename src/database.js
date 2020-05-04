const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smsdb', {useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{
    console.log('Database connection successful')
  })
  .catch((err)=>{
    console.error('Database connection error')
  })