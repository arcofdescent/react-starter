
**A simple starter kit for your Redux+React apps**

This repo can be used both as a starter kit for developing Redux+React apps as
well as a helpful guide to those wishing to see some simple code (I hope) in
action.

Here's a screenshot of the app

![app](https://dl.dropboxusercontent.com/u/30714030/redux-app.png)

We use a very simple store containing two counters. The first counter
increments/decrements by 1. The second counter increments/decrements by 2. We
also have a Messager component which sends messages to the first counter.

In all there are three components all as children of the main App component.

App is a container which is aware of Redux. The three child components below it
are not. They act as *dumb* components which simply update their views based on
change in state.

I also hope you understand and appreciate the organization of the source tree.

![tree](https://dl.dropboxusercontent.com/u/30714030/tree.png)

actions, components, containers, reducers go into their own directores. All
styles use SASS. 

Global style is defined in styles/app.scss

Component specific style is in the related component's directory.

I'm using webpack to bundle all this stuff.

If you want to run this app:
  * Download this repo (or clone it)
  * cd into it
  * npm install (assumin you already have node installed)
  * npm run test (a very simple test)
  * npm run start
  * In your browser - http://localhost:8080

