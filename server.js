let express = require('express');

let app = express();

app.use(express.json());

app.get('/time', (req, res) => {
   res.send({time: Date()});
});

let server = app.listen(22, () => {
   console.log("listening at " + 22);
})