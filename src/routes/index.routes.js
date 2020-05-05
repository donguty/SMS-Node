const {Router} = require('express');
const router = Router();

const {sendMessage} = require('../twilio/send_sms')
const SMS = require('../models/sms')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const messages = await SMS.find();
  messages.forEach(m=>console.log(m))
  res.render('index', { title: 'SMS-Node', messages});
});


router.post('/send-sms',async (req, res) => {

  const {message, phone} = req.body;
  if (!message && !phone) {
    return res.json('Missing message or phone')
  }

  const response = await sendMessage(req.body.message, req.body.phone)
  console.log(response.sid);

  await SMS.create({Body: req.body.message, To: req.body.phone})

  res.redirect('/')
})


module.exports = router;
