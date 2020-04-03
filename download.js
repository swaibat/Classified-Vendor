const download = require('url-download');

download('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', './', {
  outputName: 'my_file.4'
}).on('done', () => {
  console.log('File saved as my_file.jpg');
});
