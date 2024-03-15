const express = require('express'); 
const fs = require('fs');
const https = require('https');
const path = require('path');


const config_file = "config/config.json"
const options = "utf8"

const config = fs.readFileSync(config_file, options);
const config_json = JSON.parse(config)

const app = express(); 
const PORT = 3000; 

app.use(express.static('dist'))

app.get('/', (req, res)=>{ 
    res.set('Content-Type', 'text/html'); 
    res.status(200); 
    res.sendFile(path.join(__dirname, "./dist/index.html"))
}); 

app.get('/hello', (req, res)=>{ 
    res.set('Content-Type', 'text/html'); 
    res.status(200).send("<h1>Hello GFG Learner!</h1>"); 
}); 

app.get('/getjoke', (req, res)=> { 
    let options = `https://api.shecodes.io/ai/v1/generate?prompt=${config_json.prompt}&context=${config_json.context}&key=${config_json.apiKey}`
    let rawData = "";
    https.get(options, function(respond) {
        respond.on('data', (chunk) => { rawData += chunk; });
        respond.on('end', () =>  {
        res.set('Content-Type', 'text/html'); 
        res.status(200).send(rawData);
        })
      });

}); 

app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running", 
                   "and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 

