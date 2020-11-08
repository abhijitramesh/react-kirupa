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

## From Visuals to Components

In real world we would be given a mockup and would be asked to build some UI of from that so there are two easy steps that we need to follow.

1. Identify the major visual elements
1. Figure out what the component will be


Even though this sounds a little bit complicated these are very simple actually.

### Identifying the Major Visual Elements

What this means is we need to take apart our component into more and more simple structures like a visual hierarchy what this will do is give us a better idea on how the visual is grouped and also we don't need to think about the implementation details while we are in this step and just need to focus on how to get the stuff in a nice tree like structure.

### Identifying the Components

From our tree structure we need to figure out what are the components we should be building the best way to approach this is to see if our component is doing more than one thing if so we don't need that component, we need to strike a balance between how few vs too many components once we have figured our how many components there are we can start coding our component.

#### Creating the Component 

As always we will be starting off with our template code.

Noe Lets start building our components we will be making a color pallet which is made up of three components a Square a Label and a Card, for now lets just instantiate this with a simple br label.


``` jsx
class Square extends React.Component{
        render(){
            <br/>
        }
    }
    class Label extends React.Component{
        render(){
            <br/>
        }
        
    }
    class Card extends React.Component{
        render(){
            <br/>
        }
    }
```

#### The Card component

Lets start of from the top and implement the Card Component,

First we will start by creating our style object.

``` jsx
class Card extends React.Component {
  render() {
    var cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    };
 
    return (
      <div style={cardStyle}>
 
      </div>
    );
  }
}

```

Here we are adding some styles to our card element with a white background we have added some height and width and also we are adding a drop shadow, we are using a filter to do the same since some of the browser doesn't support this without a pre fix we are adding a WebkitFilter to ensure this works consistently in all browsers further we are just gonna call this in a dic inside our return.

#### The Square component

Now Lets make the color component that is a square component.

``` jsx
    class Square extends React.Component{
        render(){
            var squareStyle={
                height: 150,
                backgroundColor: "#FF6663"
            };
            return(
                <div style={squareStyle}>
                </div>
            );
        }
    }
```

Now you can se that we have just made a simple component with a hardcoded color just for now.

Lets go ahead and add this to our Card Component.

``` jsx
 return (
      <div style={cardStyle}>
        <Square/>
      </div>
    )
```

#### The Label component

This is the component that will hold the text for what color it is, Lets go and make this.

``` jsx
    class Label extends React.Component{
        render(){
            var labelStyle={
                fontFamily: "sans-serif",
                fontWeight: "bold",
                padding: 13,
                margin: 0
            };

            return(
                <p style={labelStyle}>#FF6663</p>
            )
        };
        
    }
```

Here we are simply creating a new style for our label with a good font and some weights also we have mentioned some padding so that everything looks cool.

#### Lets pass some properties

This view is now boring and lots of stuff are hardcoded we don't like this lets make them a bit more fun by passing in the color we can start from the Square by setting a color property there.

``` jsx
    class Square extends React.Component{
        render(){
            var squareStyle={
                height: 150,
                backgroundColor: this.props.color
            };
            return(
                <div style={squareStyle}>
                </div>
            );
        }
    }
```

Here you can see I am passing in a props.color to the background color.

Now lets make some changes in labels so that we can pass in the color hex there also.

``` jsx
    class Label extends React.Component{
        render(){
            var labelStyle={
                fontFamily: "sans-serif",
                fontWeight: "bold",
                padding: 13,
                margin: 0
            };

            return(
                <p style={labelStyle}>{this.props.color}</p>
            )
        };
        
    }
```

Now for all this to come together lets make some modification in Card as well,

``` jsx

class Card extends React.Component {
  render() {
    var cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    };
 
    return (
      <div style={cardStyle}>
        <Square color={this.props.color} />
        <Label color={this.props.color}/>
      </div>
    )
  }
}

```

So here we are passing in the color property to both the Square and Label so that we can reuse this component by simply doing this,

``` jsx
   <div>
            <Card color="#FFA737"/>

        </div>,
```
Now we can see that the card changes the color based on the changes we make on the values here on the color property of the card.

Here we are nesting some components inside components and we are making some really cool stuff using the properties of object oriented programming and help us do all the work easily. Finally this all transcribes into html css and js.

[full code](https://github.com/abhijitramesh/react-kirupa/blob/main/complexComponents.html)


## Transferring properties in react.

As we have seen in the previous code that the transferring properties in React is kind of hard and we have to write repeated code in more and more components.
We have to kind of traverse down the tree to figure out what is happening.

What this kind of means is if we visualize our views as w tree then basically if we need to transfer a property from the parent to a nth child we need to write the code n time.


Lets take a look at a sample for this.

``` jsx

class Display extends React.Component{
  render(){
    return(
      <div>
      <p>{this.props.color}</p>
      <p>{this.props.num}</p>
      <p>{this.props.size}</p>
      </div>
    );
  }
}

class Labels extends React.Component{
  render(){
    return(
      <div>
      <Display color={this .props.color}
                num={this.props.num}
                size={this.props.size}
          />
      </div>
    );
  }
}
class Shirt extends React.Component{
  render(){
    return(
      <div>
      <Labels
        color={this.props.color}
        num={this.props.num}
        size={this.props.size}
      />
      </div>
    );
  }
}

```

and to render this to the ReactDOM we do 

``` jsx
ReactDOM.render(
  <div>
    <Shirt color="steelblue" num="3.14" size="medium" />
  </div>,
  document.querySelector("#container")
);
```

See here what is happening is that The Shirt component depends on Label Component and the Label Component depend on the Display Component but for us too much work to write the same code again and again and if this is a big project we might end up messing up a lot of stuff.

#### The Spread Operator

In java script lets say we have a array of elements and we want to print it.
``` javascript

var items = ["1","2","3"];

function printStuff(a,b,c){
  console.log("printing" + a + " "+ b+ " "+c);
}
```

and to print the items we can simply do something like

``` javascript

printStuff(item[0],item[1],item[2]);

```

This might seem simple enough but what if we had a simpler way of doing it introducing spread,

``` javascript
printStuff(...items);
```

Can we use the same approach to solve our issue with transferring properties ?

Yes we can.

``` jsx
var props = {
  color: "steelblue",
  num: "3.14",
  size: "medium"
};
```

This is what our properties looks like inside a component So instead of manually referencing them we can use the spread function.


``` jsx
<Display {...this.props}/>
``` 

This will take care of our job.

Let's modify the Label and Shirt class to use this feature.


``` jsx
class Labels extends React.Component{
  render(){
    return(
      <div>
      <Display {...this.props}
          />
      </div>
    );
  }
}
class Shirt extends React.Component{
  render(){
    return(
      <div>
      <Labels
        {...this.props}
      />
      </div>
    );
  }
}
```

Once this is done everything should work as normal, this is kind of a convenient way to do this but is it the best way probably not because having an intermediate component seems like a little bit too much, what if there was a way to transfer the properties without having to use an intermediate component this is called redux.

[full code](https://github.com/abhijitramesh/react-kirupa/blob/main/transferingProperties.html)

Till now the states that we are dealing with our kind of what we an call stateless which means they have values which are passed to it but they do not necessary do anything after they come alive. They are immutable once the values are set.

So we need a better method to manage the store data in components this is where states come to play.

## Using States

Lets make a component that shows the number of lightning that strikes every second when we open the application.

This is basically a counter that increments 100 every second.

Here we are using a starter code which is basically some codepen,

``` jsx
<!DOCTYPE html>
<html>
 
<head>
  <meta charset="utf-8">
  <title>Dealing with State</title>
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
</head>
 
<body>
  <div id="container"></div>
   
  <script type="text/babel">
    class LightningCounter extends React.Component {
      render() {
        return (
          <h1>Hello!</h1>
        );
      }
    }
 
    class LightningCounterDisplay extends React.Component {
      render() {
        var divStyle = {
          width: 250,
          textAlign: "center",
          backgroundColor: "black",
          padding: 40,
          fontFamily: "sans-serif",
          color: "#999",
          borderRadius: 10
        };
 
        return (
          <div style={divStyle}>
            <LightningCounter/>
          </div>
        );
      }
    }
 
    ReactDOM.render(
      <LightningCounterDisplay/>,
      document.querySelector("#container")
    );
  </script>
</body>
 
</html>
```

Right now this application does not do much it has a good styling for the Lightning Counter Display. And the other component LightningCounter show a simple Hello text.

#### Getting our counter on

For this we first need to understand what a componentDidMount is this is an API that React Component exposes what this does is just after the component is rendered this method is called. So we can take advantage of this to implement some functionalities.

Lets modify our LightningCounter to implement the counter.

``` jsx
  class LightningCounter extends React.Component {
        constructor(props,context){
            super(props,context);
            this.state = {
                strikes:0
            };
        }
      render() {
        return (
          <h1>{this.states.strikes}</h1>
        );
      }
    }
```

Here we have just added a constructor this is simply code that is executed when the component is called every time.

state is a react specific element and what it does is basically its a bank of values.

with that in mind lets also print the state in the render method.

Now that is out of the way lets start out timer for that first we need to make use of the componentDidMount method.

``` jsx
    class LightningCounter extends React.Component {
        constructor(props,context){
            super(props,context);
            this.state = {
                strikes:0
            };
        }
        componentDidMount(){
            setInterval(this.timeTick,1000);
        }
      render() {
        return (
          <h1>{this.state.strikes}</h1>
        );
      }
    }
```

Here what we are doing is on a set interval of 1000ms we are calling the timeTick function and as you might have guessed we need to write that as well.

``` jsx
    class LightningCounter extends React.Component {
        constructor(props,context){
            super(props,context);
            this.state = {
                strikes:0
            };
        }
        componentDidMount(){
            setInterval(this.timeTick,1000);
        }
        timeTick(){
            this.setState({
                strikes: this.state.strikes +100
            });
        }
      render() {
        return (
          <h1>{this.state.strikes}</h1>
        );
      }
    }
```

If you execute this you know that its not working as expected that is because we have forgot to do something.

The problem is that we need to bind the _this_ value inside the timeTick so that it would work as expected.

``` jsx
 constructor(props,context){
            super(props,context);
            this.state = {
                strikes:0
            };
            this.timeTick = this.timeTick.bind(this);
        }
```

This should do the trick and now the app is working.

[Full Code](https://github.com/abhijitramesh/react-kirupa/blob/main/states.html)

## Going from Data to UI

Most of the time when we are making applications with React we are not gona use hard coded UI values and then call them to our screen instead we are more likely to transform some kind of data and then convert it to UI, this may be something simply like and array or even be something more like a data from an API.


Lets start with a template code.

``` jsx
<!DOCTYPE html>
<html>
 
<head>
  <meta charset="utf-8">
  <title>From Data to UI</title>
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
 
  <script type="text/babel">
    class Circle extends React.Component {
      render() {
        var circleStyle = {
          padding: 10,
          margin: 20,
          display: "inline-block",
          backgroundColor: this.props.bgColor,
          borderRadius: "50%",
          width: 100,
          height: 100
        };
 
        return (
          <div style={circleStyle}>
          </div>
        );
      }
    }
 
    ReactDOM.render(
      <div>
        <Circle bgColor="#F9C240" />
      </div>,
      document.querySelector("#container")
    );
  </script>
</body>
</html>>
```

Here we are not doing much in the DOM render method we have a Square with a borderRadius made 50% which gives the circle effect. The value we are passing around is the background color property. 

Now lets do something lets make a variable of with the circle component and call it inside our render method so and see if that works.


``` jsx
    var theCircle = <Circle bgColor="#F9C240"/>
 
    ReactDOM.render(
      <div>
        {theCircle}
      </div>,
      document.querySelector("#container")
    );
  </script>
</body>
</html>>
```

Yes that works perfectly lets not forget to put the variable inside {} so that its evaluated as a jsx expression.

Ok now that works how about we try to make a function and call that inside the render method.

``` jsx

function showCircle(){
    var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
    var ran = Math.floor(Math.random()*colors.length)

    return <Circle bgColor={colors[ran]}/>
}

    ReactDOM.render(
      <div>
        {showCircle()}
      </div>,
      document.querySelector("#container")
    );
  </script>
</body>
</html>>
```

Wow that also works what i have done inside the function is define some random colors in an array and then use a variable which will have a random value which we can use to put in the array to get a random color.

and we are calling this function inside the react DOM which would generate random circles every-time we refresh the browser.

#### Dealing with Arrays

one thing we can do to display lot of circles is to simply do this,

``` jsx

ReactDOM.render(
  <div>
    {showCircle()}
    {showCircle()}
    {showCircle()}
  </div>,
  document.querySelector("#container")
);

``` 

but that is very redundant so what we can do is have an array of circle components and simply reference the array in the DOM render.

Lets see how to do that.

First lets define a bigger array,

``` jsx
var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
              "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
```

Now lets define another array to push all our components.

``` jsx
var renderData = [];
```

In order to populate this array we can simply use a for loop iterate through the array of colors and push each values into the renderData array.

``` jsx
for(var i=0;i<colors.length;i++){
    renderData.push(<Circle bgColor={colors[i]}/>);
}


    ReactDOM.render(
      <div>
        {renderData}
      </div>,
      document.querySelector("#container")
    );
  </script>
</body>
</html>>
```

I have also rendered this into the ReactDOM so that we can see if its working.

Yup it works, although!!

Warning: Each child in a list should have a unique "key" prop.

_Check the top-level render call using <div>. See https://reactjs.org/link/warning-keys for more information.
    at Circle (<anonymous>:15:5)_

There is Warning in the console this is because react uses a key to reference each element in the DOM and these elements don't have any so lets provide it some.

``` jsx
for(var i=0;i<colors.length;i++){
    renderData.push(<Circle key={i+colors[i]} bgColor={colors[i]}/>);
}
```

Ok that should do it if we reload now the error should be gone.

[full code](https://github.com/abhijitramesh/react-kirupa/blob/main/Data_UI.html)

## Lifecycle Methods in React

React has lot of LifeCycle methods basically everything before the DOM is initialized to followed by the initialization fo the component the update of the component the removal of the component end even the destruction of the DOM everything is signified as some form or other or a lifecycle method.

Lets look at a sample code to understand this component lifecycles.

``` jsx
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Lifecycle Methods : Simple Counter</title>
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

<style>
    #container {
      padding: 50px;
      background-color: #FFF;
    }
    h1 {
      font-family: sans-serif;
      font-size: 72;
      padding: 50px;
      margin: 0;
      border-radius: 5px;
      background-color: #19647E;
      color: #F4D35E;
    }
  </style>
</head>
<body>
  <div id="container"></div>
  
  <script type="text/babel">
    class SimpleCounter extends React.Component {
      constructor(props) {
        super(props);
    
        this.state = {
          count: 0
        };

        this.timerTick = this.timerTick.bind(this);
      }
    
      timerTick() {
        this.setState((prevState) => {
          return { 
            count: prevState.count + 1 
          };
        });
      }
    
      componentDidMount() {
        this.timer = setInterval(this.timerTick, 100);
      }
      
      componentDidUpdate(prevProps, prevState) {
        
      }
    
      render() {
        return (
          <h1>{this.state.count}</h1>
        );
      }
    }

    ReactDOM.render(
      <div>
        <SimpleCounter />
      </div>,
      document.querySelector("#container")
    );
  </script>
</body>

</html>
```

This code is very similar to the the lightning counter we made earlier lets add some log functions in this to understand the lifecycle of the components.

``` jsx

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Lifecycle Methods : Simple Counter</title>
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

<style>
    #container {
      padding: 50px;
      background-color: #FFF;
    }
    h1 {
      font-family: sans-serif;
      font-size: 72;
      padding: 50px;
      margin: 0;
      border-radius: 5px;
      background-color: #19647E;
      color: #F4D35E;
    }
  </style>
</head>
<body>
  <div id="container"></div>
  
  <script type="text/babel">
   class SimpleCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.timerTick = this.timerTick.bind(this);

    console.log("Constructor!");
  }

  timerTick() {
    this.setState((prevState) => {
      return { 
        count: prevState.count + 1 
      };
    });
  }

  componentDidMount() {
    this.timer = setInterval(this.timerTick, 100);

    console.log("Component has mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated from: " + prevState.count);
  }

  render() {
    console.log("SimpleCounter render call!");
    
    return (
      <h1>{this.state.count}</h1>
    );
  }
}

ReactDOM.render(
  <div>
    <SimpleCounter />
  </div>,
  document.querySelector("#container")
);
  </script>
</body>

</html>
```

Here we have added logs in different parts of the code like in the constructor we have added a log stating that the component has been constructed further more we have added some more logs at componentDidMount and componentDidUpdate.

Now if we run the code and check the log we will kind of get the understanding of what is happening to the components.

To unmout the component lets add a condition check and when the counter is at 50 lets unmount the component and then log it as well.

``` jsx
  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated from: " + prevState.count);

    if (this.state.count == 50) {
      ReactDOM.unmountComponentAtNode(document.querySelector("#container"));
    }
  }

  componentWillUnmount() {
    console.log("Component is about to be unmounted!");

    clearInterval(this.timer);
  }
```

Now if we check the logs we can see the whole lifecycle of the component.


We don't need to memories all these lifecycle buts it good to know they are there so that we can use them as and when its required.

[Full Code](https://github.com/abhijitramesh/react-kirupa/blob/main/Lifecycle.html)

## Accessing React DOM elements

Let' say we have a color pallet and one box where we can enter a value and when we do so and clicl on go the color changes of the pallet and then the value in the text box clears. How do we do this in react code, it must be hard to follow using old principles that is why we should use something known as DOM elements, let us take a look at some template code.

``` jsx
<!DOCTYPE html>
<html>
 
<head>
  <meta charset="utf-8">
  <title>The Colorizer!</title>
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

  <style>
    #container {
      padding: 50px;
      background-color: #FFF;
    }
 
    .colorSquare {
      box-shadow: 0px 0px 25px 0px #333;
      width: 242px;
      height: 242px;
      margin-bottom: 15px;
    }
 
    .colorArea input {
      padding: 10px;
      font-size: 16px;
      border: 2px solid #CCC;
    }
 
    .colorArea button {
      padding: 10px;
      font-size: 16px;
      margin: 10px;
      background-color: #666;
      color: #FFF;
      border: 2px solid #666;
    }
 
    .colorArea button:hover {
      background-color: #111;
      border-color: #111;
      cursor: pointer;
    }
  </style>
</head>
 
<body>
  <div id="container"></div>
  <script type="text/babel">
 
    class Colorizer extends React.Component {
      constructor(props, context) {
      super(props, context);
 
        this.state = {
          color: "",
          bgColor: "white"
        };
 
        this.colorValue = this.colorValue.bind(this);
        this.setNewColor = this.setNewColor.bind(this);
      }
 
      colorValue(e) {
        this.setState({ 
          color: e.target.value 
        });
      }
 
      setNewColor(e) {
        this.setState({
          bgColor: this.state.color
        });
 
        e.preventDefault();
      }
 
      render() {
        var squareStyle = {
          backgroundColor: this.state.bgColor
        };
 
        return (
          <div className="colorArea">
            <div style={squareStyle} className="colorSquare"></div>
 
            <form onSubmit={this.setNewColor}>
              <input onChange={this.colorValue}
                placeholder="Enter a color value"></input>
              <button type="submit">go</button>
            </form>
          </div>
        );
      }
    }
 
    ReactDOM.render(
      <div>
        <Colorizer />
      </div>,
      document.querySelector("#container")
    );
  </script>
</body>
 
</html>
```

#### Meet refs 

Let's take a look at refs this is kind of a bridge between jsx and html lets use this in this example to make some sense of how refs works.

Our goal here is to unfocus the box when the value is being changed and also to clear the value after every submission,

Lets take a look at references

``` jsx
render() {
  var squareStyle = {
    backgroundColor: this.state.bgColor
  };
 
  var self = this;
 
  return (
    <div className="colorArea">
      <div style={squareStyle} className="colorSquare"></div>
 
      <form onSubmit={this.setNewColor}>
        <input onChange={this.colorValue} 
               ref={
                 function(el) {
                   self._input = el;
                 }
               }
               placeholder="Enter a color value"></input>
        <button type="submit">go</button>
      </form>
    </div>
  );
}
```

Here first we have referenced the self to be the this keyword and then we are using ref to call a function which would get called when our component mounts and reference to the final HTML DOM element is passed in as an argument. We are capturing this using the el reference and passing in these values as _input.

Noe lets change in-order to change focus and reset values the code lives inside setNewColor(e) method lets go ahead and change that.

``` jsx

      setNewColor(e) {
        this.setState({
          bgColor: this.state.color
        });
        
        this._input.focus();
        this._input.value="";
        e.preventDefault();
      }
```

#### Portals

Lets take a look at one more DOM trick that we can use called portals.

Lets add a headings and some style on top of our pallet,

``` jsx
    #colorHeading {
    padding: 0;
    margin: 50px;
    margin-bottom: -20px;
    font-family: sans-serif;
    }
  </style>
</head>
 
<body>
    <h1 id="colorHeading">Colorizer</h1>
  <div id="container"></div>
  <script type="text/babel">
```

What we are planning to do here is to change the heading to the name of the color we want.

Let us add a color label component,

``` jsx
    var heading = document.querySelector("#colorHeading");
    class ColorLabel extends React.Component{
        render(){
            return ReactDOM.createPortal(
            ":"+this.props.color,
            heading
            );
        }
    }
```

Here we are doing here is first binding the color heading and the using the createPortal trick to edit the value such that we can add the color along with the pallet.

[full code](https://github.com/abhijitramesh/react-kirupa/blob/main/DOM_Access.html)

## Events in React

Most of the thing that we are doing until now mostly depends on the on page load and does not react to anything we do, most UI intense applications tend to use such interaction that is where Events come into play.

As usual we have a basic code template to start with.

``` jsx
<html>
 
<head>
  <meta charset="utf-8">
  <title>Events</title>
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
  <script type="text/babel">
   class Counter extends React.Component {
  render() {
    var textStyle = {
      fontSize: 72,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold"
    };
 
    return (
      <div style={textStyle}>
        {this.props.display}
      </div>
    );
  }
}
 
class CounterParent extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      count: 0
    };
  }
 
  render() {
    var backgroundStyle = {
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: "center"
    };
 
    var buttonStyle = {
      fontSize: "1em",
      width: 30,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px"
    };
 
    return (
      <div style={backgroundStyle}>
        <Counter display={this.state.count} />
        <button style={buttonStyle}>+</button>
      </div>
    );
  }
}
 
ReactDOM.render(
  <div>
    <CounterParent />
  </div>,
  document.querySelector("#container")
);
  </script>
</body>
 
</html>
```

This is very basic stuff, the counter has some text and the counter parent is basically just a square all with some styles applied. We also have a + button on the dom render.

Let us add a function to on click of the button.

``` jsx

retrun(
  <div style={backgroundStyle}>
  <Counter display={this.state.count}/>
  <button onClick={this.increase} style={buttonStyle}>+</button>
  </div>
        );

```

Now that we have told react to call the on click function when the + button is clicked lets go ahead and implement increase function.

``` jsx

increase(e){
  this.setState({
    count: this.state.count +1
  });
}

```
also don't forget to bind the this.increase on the constructor.

``` jsx
constructor(props) {
    super(props);
 
    this.state = {
      count: 0
    };
 
    this.increase = this.increase.bind(this);
  }
```


In the increase function all we are doing is setting the count to be the count +1.

#### Event properties 

We pass in events as arguments into our event handler basically what this means is if i am passing in a mouse event we can deal with things like where in the screen are we clicking or if its a keyboard event what key i am pressing and so on.

#### Meet Synthetic Events

In React we are not dealing with the regular dom events we are dealing with ReactDOM events which are synthetic that is where synthetic events comes to play.

Even thought how it works is different we are able to do everything we are able to do with SyntheticEvents same as in vanilla DOM events.

Lets do some stuff with syntethic events like increase the count by 10 when we click with shift pressed.

``` jsx

increase(e){
  var currentCount = this.state.cont;

  if(e.shiftKey){
    currentCount +=10;
  }
  else {
    currentCount +=1;
  }

  this.setState({
    count: currentCount
  });
}

```

Let us create another component for the plus button,

``` jsx
class PlusButton extends React.Components{
  render(){
    return(
      <button>
      +
      </button>
    );
  }
}

```

Now if we want to handle click on this we cannot do something like,

``` jsx

render(){
  return(
    <div>
    <Counter display={this.state.count}/>
    <PlusButton onClick={this.increase}/>
    </div>
  );

}
```
This just wont work we need to do something more link this.

``` jsx

render(){
  return(
    <div>
    <Counter display={this.state.count}/>
    <PlusButton clickHandler={this.increase}/>
    </div>
  );
}
```
here we are using an event listener,

``` jsx
class PlusButton extends React.Components{
  render(){
    return(
      <button onClick={this.props.clickHandler}>
      +
      </button>
    );
  }
}

```

Yup that should do the trick.

[full code](https://github.com/abhijitramesh/react-kirupa/blob/main/Events.html)