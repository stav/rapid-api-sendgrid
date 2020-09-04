const axios = require("axios");

axios({
  "method": "POST",
  "url": "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
  "headers": {
    "content-type": "application/json",
    "x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
    "x-rapidapi-key": "8049...5c7",
    "accept": "application/json",
    "useQueryString": true
  },
  "data": {
    "personalizations": [
      {
        "to": [
          {
            "email": "Phil.N.Your@gmail.com"
          }
        ],
        "subject": "Hello, World!"
      }
    ],
    "from": {
      "email": "from_address@example.com"
    },
    "content": [
      {
        "type": "text/plain",
        "value": "Hello, World!"
      }
    ]
  }
})
.then((response)=>{
  console.log(response)
})
.catch((error)=>{
  console.log(error)
})
