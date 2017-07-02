const mongoose = require('mongoose')
const Location = mongoose.model('Location')

exports.addLocationToUser = async (req, res, next) => {
  const locations = req.user.locations.map(obj => obj.toString())
}

exports.saveLocation = async (req, res, next) => {
  // console.log(req)
  const location = new Location(req.body)

  // save location in database
  await location.save()
  res.json(location)
}
