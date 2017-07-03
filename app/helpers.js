/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// read files from the system we're running on
const fs = require('fs')

// moment.js for dates
exports.moment = require('moment')

// Helper for static google map
exports.staticMap = ([lng, lat]) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

// Details about the site
exports.siteName = `Hiking MEAN Web App`;
