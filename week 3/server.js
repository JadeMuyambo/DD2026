import { createServer } from 'node:http';

// create an array of objects to store our apps content 

const content = [
    {
        title:"Welcome to the home page",
        body:"Welcome Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis veniam tempora beatae libero minima reiciendis voluptatem facere numquam incidunt recusandae laborum explicabo, quae non vel minus suscipit eum accusantium?",
        url:"/"
    },
    {
        title:"Welcome to the about page",
        body:"Welcome Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis veniam tempora beatae libero minima reiciendis voluptatem facere numquam incidunt recusandae laborum explicabo, quae non vel minus suscipit eum accusantium?",
        url:"/about"
    },
    {
        title:"Welcome to the contact page",
        body:"Welcome Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis veniam tempora beatae libero minima reiciendis voluptatem facere numquam incidunt recusandae laborum explicabo, quae non vel minus suscipit eum accusantium?",
        url:"/contact"
    },
    {
        title:"Welcome to the help page",
        body:"Welcome Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis veniam tempora beatae libero minima reiciendis voluptatem facere numquam incidunt recusandae laborum explicabo, quae non vel minus suscipit eum accusantium?",
        url:"/help"
    }

];

function answerRequest(statusCode, contentObj, response){
    let template = `<!DOCTYPE html>
<html lang="en">
<head>
    <title> ${contentObj.title} </title>
</head>
<body>
    <!--Navigation-->
    <ul>
      <li> <a href="/"> Home</a></li>
      <li> <a href="/"> About Us</a></li>
      <li> <a href="/"> Contact Us</a></li>
      <li> <a href="/"> Support</a></li>  
    </ul>

     <h1> ${contentObj.title} </h1>
     <p>
     ${contentObj.body}  
     </p>
</body>
</html>`;

    response.writeHead(statusCode, {'Content-Type': 'text/html'});
    response.end(template);
}

const notfound  = {
    title: "404 Not found",
    body: "We didn't find your page!!"
};

const server = createServer((req, res) => {

    console.log(`Received request for ${req.url}`);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const page = content.find((element) => element.url == req.url);

    if(page) {
        // display the content
        answerRequest(200, page, res);
    } else {
        answerRequest(404, notfound, res);
    }
   
});

// starts a simple http server locally on port 3000

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000 to close use ctrl + C');
});

// run with `node server.mjs`
