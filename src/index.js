const express = require('express');
const app = express();
const path = require('path');
//*settings
app.set('port',3000);
app.set('views',path.join(__dirname+'/views'))
app.set('view engine','ejs');

//*routes
app.use(require('./routes/index'));

//*listening server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});