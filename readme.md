# [Kirupa React](https://www.kirupa.com/react/index.htm)

This readme contains the notes I wrote and while following along Kirap React for Beginners tutorial.

## Building the first React Applicaiton
#### JSX

Unlike other websites we have seen React uses something known as JSX, JSX allows us to use html like tags inside javascript which allows us to create good looking UI as well as manipulate its functions. What react does is take this code and convert it into normal JS,HTML and CSS so that our browser can understand the same.

#### The basic idea

``` html
<!DOCTYPE html>
<html>
 
<head>
  <meta charset="utf-8">
  <title>React! React! React!</title>
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>


</head>
 
<body>
    <script>

      </script>
</body>

```

This is the basic html template that we are going to be using to build our react application, here instead of setting up a local environment we are using a  calling the required dependencies inside the script tag and let the browser do the heavy lifting for now.


#### The render function

First we are going to take a look at the most important function in react that is the Render function≥

Let us print something out

``` jsx
ReactDOM.render(
  <h1>Batman</h1>,
  document.body
);
```


This method takes two arguments the text that is to be rendered and where we are going to render it to.

#### Changing the destination

It is not general practice to use the render function in this way so we introduce a div here.

``` html
<body>
    <div id="container"></div>
    <script type="text/babel">
    var destination = document.querySelector("#container")
        ReactDOM.render(
          <h1>Batman</h1>,
            destination
        );
      </script>
```

We have also modified the 2nd argument we pass in we define this as a variable outside the render function and simply reference it inside the function.

#### Styling this up

Let's add some color to this

``` html
<style>
    #container {
    	padding: 50px;
    	background-color: #EEE;
    }
    #container h1 {
    	font-size: 144px;
		font-family: sans-serif;
   	 color: #0080a8;
    }
</style>
```

Here we are first defining a background for the container and added a 50px padding then we more on to changing the default h1 tag size, font and color.

This is just a basic understanding of the render method.

[Full Code](https://github.com/abhijitramesh/react-kirupa/blob/main/hello_react.html)
