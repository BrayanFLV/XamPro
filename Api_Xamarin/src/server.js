const express = require('express');
const app = express();

app.set('port', process.env.PORT||3000);

app.use(express.json());

app.use('/api/productos',require('./routes/producto'));

app.listen(app.get('port'), () => {
    console.log('breve', app.get('port'));
});