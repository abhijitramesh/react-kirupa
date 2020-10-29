# [Kirupa React](https://www.kirupa.com/react/index.htm)

This readme contains the notes I wrote and while following along Kirap React for Beginners tutorial.

## Building the first React Application
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

## Components in React
Components are the basic building blocks of a react application, Every item in a page is called a component and we refer them also in a similar manner.


#### Function in Java Script

In JavaScript we use function to avoid boiler plate code. There are lots of similarities with functions and React Components.

Lets say we have a this snippet of code.

``` javascript
var speed = 10;
var time = 5;
alert(speed * time);
  
var speed1 = 85;
var time1 = 1.5;
alert(speed1 * time1);
  
var speed2 = 12;
var time2 = 9;
alert(speed2 * time2);
  
var speed3 = 42;
var time3 = 21;
alert(speed3 * time3);
```

Instead of doing so much we can just write a function
``` js
function getDistance(speed, time) {
    var result = speed * time;
    alert(result);
}
```

and then do invocation to the same.

``` js
getDistance(10, 5);
getDistance(85, 1.5);
getDistance(12, 9);
getDistance(42, 21);
```

This looks much cleaner and let us reuse code without much hassle.

#### Let's change the way we look at UI 

We are going to take a look at the hello_react.html code again and then make some changed to the same.

``` js
var destination = document.querySelector("#container")
        ReactDOM.render(
          <h1>Batman</h1>,
            destination
```

Lets us change this a bit and add some more elements to the screen.

``` js
 var destination = document.querySelector("#container")
        ReactDOM.render(
            <div>
          <h3><i>Batman</i></h3>
          <h3><i>Superman</i></h3>
          <h3><i>Wonder Women</i></h3>
          <h3><i>Green Lantern</i></h3>
          <h3><i>Aquaman</i></h3>
          </div>,
            destination
        );
```

See now we have added some more elements to the screen and have changed the html tag to h3 just for better readability. Also have made them italic.


And this is lot of work we have to go through each one of the elements to modify them and change them and make them italics and and so on, instead of doing all this we can adapt some of the cool factor of function this is called React Components.


#### Meet React Components

Lets start by creating a React Component Lets call it hello world.

``` jsx
class HelloWorld exteds React.Compponet{
    render(){

    }
}
```

This is what the skeleton of our component class looks like. Notice that instead of return we are using something called render here its the same render that we have used in our code before this also deals with modifying the jsx within our code. Lets add some stuff into this now.


``` jsx
class HelloWorld exteds React.Compponet{
    render(){
        <p> Hello, componetized world!</p>
    }
}
```

To display this into the screen we can just call it like we would call any html elements.

``` jsx
React.DOM.render(
    <HelloWorld/>,
    document.querySelector("#container")
);

```

Just to have control over the stuff we are putting to the screen lets wrap the stuff in a div tag and also call more and more HelloWorld tags.

This is all fun but we are not passing in any arguments and that is not something cool so lets to that to pass in javascript arguments we just need to close them in {}.

So how that would look like is
``` jsx
    class HelloWorld extends React.Component{
        render(){
            return <p>Hello, {this.props.greetTarget}!</p>
        }
    }
```

And lets modify the stuff the calls as well
``` jsx
 ReactDOM.render(
            <div>
            <HelloWorld greetTarget="Batman"/>
            <HelloWorld greetTarget="Superman"/>
            <HelloWorld greetTarget="Wonder Women"/>
            <HelloWorld greetTarget="Green Lantern"/>
            <HelloWorld greetTarget="Aquaman"/>
            </div>,
            destination
        );
```

Here we are using just one property the this.prop is handling all that but we can have many more properties if we need and this.props will handle all of them.

#### Dealing with children

Children might be a bit hard to deal with but not in React though they are very obedient.

Lets create a new component to add button to our screen.

``` jsx
     class Buttonify extends React.Component {
  render() {
    return(
      <div>
        <button type={this.props.behavior}>{this.props.children}</button>
      </div>
    );
  }
}
```

And we have to add this to our body so that we can display it.

``` jsx
 ReactDOM.render(
            <div>
            <HelloWorld greetTarget="Batman"/>
            <HelloWorld greetTarget="Superman"/>
            <HelloWorld greetTarget="Wonder Women"/>
            <HelloWorld greetTarget="Green Lantern"/>
            <HelloWorld greetTarget="Aquaman"/>
            <Buttonify behavior="submit"> SEND DATA</Buttonify>
            </div>,
            destination
        );
```

Also lets style it a bit so that it looks good.

``` css
      #button{
          font-size: 64px;
      }
```

The behavior element allows us to access the buttons type.

[Full Code](https://github.com/abhijitramesh/react-kirupa/blob/main/components.html)

## Styling Components

Let's start with our same old started code with some tiny modifications and get started with some styling.

``` html
<!DOCTYPE html>
<html>
 
<head>
  <meta charset="utf-8">
  <title>React! React! React!</title>
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

  <style>
    #container {
      padding: 50px;
      background-color: #FFF;
    }
  </style>
</head>
 
<body>
      <div id="container"></div>
</body>
```


The only modification is that I have added some style and put a div inside the body tag.

Let's get down so defining some components, We are gonna style some vowels and since vowels are letters lets call our Components Letters.
And call the same to ReactDOM.

``` html
<body>
     <div id="container"></div>

    <script type="text/babel">
    var destination = document.querySelector("#container");
    class Letter extends React.Component {
    render() {
      return(
        <div>
          {this.props.children}
        </div>
      );
    }
  }

    ReactDOM.render(
        <div>
            <Letter>A</Letter>
            <Letter>E</Letter>
            <Letter>I</Letter>
            <Letter>O</Letter>
            <Letter>U</Letter>
        </div>,
        destination
    );
  </script>
</body>
```
The component we have created here just displays the child component of it.

Now that is great and all but lets make it more pleasing.

The very traditional way to style this would be to look at the tree of div and then depending upon that add some styling which basically means,

``` css
div div div {
  padding: 10px;
  margin: 10px;
  background-color: #ffde00;
  color: #333;
  display: inline-block;
  font-family: monospace;
  font-size: 32px;
  text-align: center;
}
```

We can get away with styling like this in a small project but as our project gets bigger and bigger this would get more complicated. The next approach we can follow is to move to a class based approach for styling.

Lets put this styling in a class in our style tag.

``` css
.letter{
   padding: 10px;
  margin: 10px;
  background-color: #ffde00;
  color: #333;
  display: inline-block;
  font-family: monospace;
  font-size: 32px;
  text-align: center;   
}
```

For this to be reflected in our components we just need to specify the same inside our div tag.

Compared to calling the class as simply class here we are calling it is className because class is a reserved keyword in javascript and hence the syntax is to use className.

Up until now we are kind of following the css way of styling lets move on to the React way of styling content.

React uses something called as a styling object for styling our components.

lets define our styling object inside render of our Letter component,

``` jsx
var letterStyling = {
        padding:10,
        margin:10,
        backgroundColor: "#ffde00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize:32,
        textAlign: "center"
    };
```
Notice that we are not using css style of naming like background-color instead we are using something like backgroundColor this is because what we are defining here should be more javascript friendly.

Now we need to mention this style inside our div 
``` jsx
return(
            <div style={letterStyle}>
                {this.props.children}
            </div>
        );
```

here we are referring our style object letterStyle by using curly brackets so that React knows that the expression inside should be evaluated.

Again, this is cool and all but whats so cool sticking with one background color lets style it up a bit.

We just need to pass in an argument in our DOM render so that we can specify a color for each render so lets change the passing side first.

``` jsx
 ReactDOM.render(
        <div>
            <Letter bgcolor="#58B3FF">A</Letter>
            <Letter bgcolor="#FF605F">E</Letter>
            <Letter bgcolor="#FFD52E">I</Letter>
            <Letter bgcolor="#49DD8E">O</Letter>
            <Letter bgcolor="#AE99FF">U</Letter>
        </div>,
        destination
    );
```
and for these changes to reflect we need to make it aware to our Letter Component styling object.

``` jsx
 render() {
    var letterStyling = {
        padding:10,
        margin:10,
        backgroundColor: this.props.bgcolor,
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize:32,
        textAlign: "center"
    };
```

Now this looks so much better and also we learned how to use styling objects to style our components.


[Full Code](https://github.com/abhijitramesh/react-kirupa/blob/main/stylingComponents.html)
