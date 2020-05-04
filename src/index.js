const app = require('./app');

require('./database');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

app.listen(port,()=>console.log(`Served on port ${port}`));


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}