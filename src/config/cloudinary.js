const cloudinary = require('cloudinary').v2

cloudinary.config({ 
    cloud_name: 'dsczklyk3', 
    api_key: '774726913534325', 
    api_secret: process.env.CLOUDINARY_SECRET 
  });

  module.exports = cloudinary;