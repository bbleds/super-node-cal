# Node Cal
####A calendar application for the command line and the browser

##Purpose & Goals
This app was built during my time at Nashville Software School with an overall goal of mimicking the cal command line application in UNIX. In order to do this, I used Zellar's congruence, which is an algorithm for finding a specific day number of any week. For example, an input of '2 January 2016' would output 0, which would equate to Saturday (where each day of the week is a number between 0-6, and Saturday is 0). MVP(minimal viable product) for this project was -
  1. When the user runs the application in the command line followed by a month and a year (with range 1753-9999), output correctly spaced calendar for that specific month and that specific year.
  2. When the user runs the application in the command line followed by a year (with range 1753-9999), output correctly spaced calendar for the entire year.
  3. When the user runs application followed by no month or year, output the calendar for the current month of the current year.

##Running & Local Use
####Running in the Browser
Node Cal current runs on both the browser and the command line! You can demo the browser version
<a href="https://node-cal.herokuapp.com" target="_blank">here</a>!
####Running Locally
If you want to run Node Cal locally run the following commands in the command line-
  1. Git clone onto your local machine - ```git clone https://github.com/bbleds/super-node-cal.git```
  2. Go into the newly created directory - ```cd super-node-cal```
  3. Npm install node module dependecies for this project - ```npm install```
  4. You are now ready to use the app in the command line!
  <br>
   - Run the following command for a specific month of a specific year (where 'month number' is 1 for January, 2 for February, etc, and 'year number' is any year betweeen 1753 and 9999)- ```npm run cal <month number> <year number>```
   <br>
   - Run the following command for a full year (where 'year number' is any year betweeen 1753 and 9999)- ```npm run cal <year number>```
