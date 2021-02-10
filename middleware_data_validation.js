const dataValidator = (req, res, next) => {
  var dateInput = req.params.dateInput;
  const regexUnix = /^\d{7}/;
  
  // find existence of data
  if(dateInput) {
    // check UNIX format
    if(regexUnix.test(dateInput)){
      req.params.isUnix = true;
      next()
    }
    
    // check string that are NOT in date format
    else if(new Date(dateInput) == "Invalid Date") {
      return res.json({error : "Invalid Date"})
    }
    
    // check string in normal Date format
    else {
      next()
    }
  }
  else{
    let date = new Date()
    return res.json({unix: Date.now(), utc: date.toUTCString()})
  }
}
      
module.exports = dataValidator