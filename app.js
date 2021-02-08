var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyuljWqy8lJvh9M5'}).base('appBFUQTUyEWm8N4A');

var myForm = document.getElementById('myForm');
var input = document.getElementById('name');

myForm.onsubmit = (e) => {
    e.preventDefault();

    // let inputValue = input.value;

    // return console.log(inputValue);
    
    base('Waitlist').create([
      {
        "fields": {
          "Email": `${input.value}`
        }
      },
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    });
};

