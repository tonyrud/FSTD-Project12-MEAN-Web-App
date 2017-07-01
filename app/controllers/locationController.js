const mongoose = require('mongoose')
const Location = mongoose.model('Location')

exports.saveLocation = async (req, res, next) => {
  const location = new Location(req.body)

  // save location in database
  location.save()
  res.json(location)
}
