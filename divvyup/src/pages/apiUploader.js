var imgbbUploader = require('imgbb-uploader');

imgbbUploader("1676a31ac649c413165855a3c08a82ea", "rec2.png")
  .then(response => console.log(response))
  .catch(error => console.error("error"))
