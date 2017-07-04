const mongoose = require('mongoose')
const Location = mongoose.model('Location')
const request = require('request')
const http = require('https')
const axios = require('axios')

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

exports.getImage = async (req, res, next) => {
  const images = await axios.get('https://api.flickr.com/services/feeds/photos_public.gne', {
    params: {
      tags: req.params.search,
      format: 'json',
      nojsoncallback: 1
    }
  })
  if (images) {
    res.json({ images: images.data.items })
  }
}

exports.getUserLocations = async (req, res, next) => {
  const userLocations = await Location.find({
    _id: { $in: req.user.locations }
  })
  res.json({ locations: userLocations })
}
