var express = require('express')
var app = express()
var router = express.Router();


const getTimeStamp = (req, res) => {
    let date

    if (!req.params.date) {
        date = new Date()
        const now = { 
            unix: date.getTime(), 
            utc: date.toUTCString() 
        }
        console.log(now)
        return res.json(now)
    }
  

    date = !isNaN(req.params.date)
        ? new Date(Number(req.params.date))
        :new Date(req.params.date)
        
  
  if(isNaN(date)){ 
  return res.json({error: "Invalid Date"})
  }
 
    const timeStamp = {
        unix: date.getTime(),
        utc: date.toUTCString()
    }
    console.log(timeStamp)

    res.json(timeStamp)
 
};



app.get('/api/:date?', getTimeStamp)



router.get('/:date?', getTimeStamp)

module.exports = router;