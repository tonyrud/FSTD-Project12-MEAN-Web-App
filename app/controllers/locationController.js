const mongoose = require('mongoose')
const Location = mongoose.model('Location')

exports.saveLocation = async (req, res, next) => {
  // find count of existing location based on unique id
  const existingLocation = await Location.count({ unique_id: req.body.unique_id })
  if (existingLocation === 0) {
    // create and save location in database
    const location = new Location(req.body)
    await location.save()
    console.log('save location')
  } else {
    console.log('don\'t save location')
  }
  next()
}
