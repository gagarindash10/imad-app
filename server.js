var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
   'article-one' :{
    title: 'Article one | Gagarin Dash',
    heading:'Article one',
    date:'25th feb,2018',
    content:`<p>
                This is the content of my first article
            </p>
            <p>
                Sachin is the god of crciket and i miss him a lot since he's retired.Sachin is the god of crciket and i miss him a lot since he's retiredSachin is the god of crciket and i miss him a lot since he's retiredSachin is the god of crciket and i miss him a lot since he's retiredSachin is the god of crciket and i miss him a lot since he's retired
            </p>`
            
    
  },
   'article-two' : {title: 'Article Two | Gagarin Dash',
    heading:'Article Two',
    date:'25th feb,2018',
    content:`<p>
                This is the content of my second article
            </p>
            <p>
                Sachin is the god of crciket and i miss him a lot since he's retired.Sachin is the god of crciket and i miss him a lot since he's retiredSachin is the god of crciket and i miss him a lot since he's retiredSachin is the god of crciket and i miss him a lot since he's retiredSachin is the god of crciket and i miss him a lot since he's retired
            </p>`
    },
   'article-three' : {title: 'Article Three | Gagarin Dash',
    heading:'Article three',
    date:'25th feb,2018',
    content:`<p>
                This is the content of my third article
            </p>
            <p>
                Sachin is the god of crciket and i miss him a lot since he's retired.Sachin is the god of crciket and i miss him a lot since he's retiredSachin is the god of crciket and i miss him a lot since he's retiredSachin is the god of crciket and i miss him a lot since he's retiredSachin is the god of crciket and i miss him a lot since he's retired
            </p>`
         }
};

function createTemplate(data){  
    var title =data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmlTemplate = `
    <html>
    <head>
        <title>
            Article one| Gagarin Dash
        </title>
        <meta name="viewport" content="width=device-width,initial scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
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
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    res.send(createTemplate(articles[articleName]));
});
var articleName = req.params.articleName; 
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
