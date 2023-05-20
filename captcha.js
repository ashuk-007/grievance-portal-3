// Create a canvas element with a size of 60 pixels by 30 pixels
var canvas = document.createElement('canvas');
canvas.width = 60;
canvas.height = 30;

// Generate a random number between 10000 and 99999
var rand_num = Math.floor(Math.random() * 90000) + 10000;

// Store the random number in the session
sessionStorage.setItem('CODE', rand_num);

// Draw the random number onto the canvas
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(255,160,120)';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'rgb(0,0,0)';
ctx.font = 'bold 20px Arial';
ctx.fillText(rand_num, 5, 20);

// Convert the canvas to a Blob object
canvas.toBlob(function(blob) {
  // Create a new image file object
  var file = new File([blob], 'captcha.jpg', {type: 'image/jpeg'});
  
  // Use the FileReader API to convert the file to a data URL
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function() {
    // Create an image element and set its source to the data URL
    var img = document.createElement('img');
    img.src = reader.result;
    
    // Append the image element to the document body for display
    document.body.appendChild(img);
  };
}, 'image/jpeg');
