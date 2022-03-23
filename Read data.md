# Read data from FireBase

> coming soon (⚠ Work in progress)

### How can I read data

You are able to read it with javascript with the node js and the vanilla. The différence between those two methods in the first one (nodeJs) you will save the data in a variable and next log it and with the vanilla Js you will insert it to the Html DOM.

In this example we will focus on the writing data to the Html Dom without focusing much on the nodeJs version because it doesn't change a lot.

### Read FireBase data and insert it to the DOM

First we need to create an Html file and link for example a *CSS* file with the style or use a *framework* like me. Next after style our page we will need a container which will be change with the data that we read.

All next steps will be done in the Js file

```html
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id="container"></div>
    <script src="./index.js"></script>
  </body>
</html>
```
