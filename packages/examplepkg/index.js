const figlet = require('figlet');

figlet('YEP Example!', (err, data) => {
  if (err) {
    console.error('Something went wrong...');
    return;
  }
  console.log(data);
}); 