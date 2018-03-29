var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article1={
  title:'Article-1',
  heading:'Article-one',
  date:'feb 17,2018',
  content:` <p>
                This is the first article that i have posted on my new webappbr> So please check it out you may like this.
            </p>
            <p>
                This is the first article that i have posted on my new webapp<br> So please check it out you may like this.
            </p>
            <p>
                This is the first article that i have posted on my new webapp<br> So please check it out you may like this.
            </p>
            <p>
                This is the first article that i have posted on my new webapp<br> So please check it out you may like this.
            </p>
            <p>
                This is the first article that i have posted on my new webapp<br> So please check it out you may like this.
            </p>`
};
function createtemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmltemplate  = `<html>
    <head>
        <title> ${title} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="Container">     
         <div>
            <a href="/">Home</a>
         </div>
         <hr/>
         <h3>This is the new webpage you are looking at</h3>
         <div>
            ${date}
         </div>
         <div>
          ${content}
         </div>
        </div>
    </body>

</html>
`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/', function (req, res) {
  res.send(createtemplate(article1));
});
app.get('/article-1',function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
    
});
app.get('/article-2',function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-2.html'));
    
});
app.get('/article-3',function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-third.html'));
    
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names=[];
app.get('/submit-name/:name',function(req,res){
    var name=req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
