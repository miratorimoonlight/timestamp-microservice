const router = require("express").Router();
const dataValidator = require("./middleware_data_validation");

router.get("/:dateInput?", 
  dataValidator,
  (req, res) => {
    var dateInput = req.params.dateInput
    //unix format
    if(req.params.isUnix) {
      let date = new Date(parseInt(dateInput));
      return res.json({unix: parseInt(dateInput), utc: date.toUTCString()})
    }
    //normal format
    else {
      let date = new Date(dateInput);

      return res.json({
        unix: Date.parse(dateInput),
        utc: date.toUTCString()
      })
    }
  }         
)


module.exports = router;