/*This code diaplays greetings to your visitors based on the current time of the day*/

var currentDay = new Date(); //creates a new date object

var hourNow = currentDay.getHours(); //gets current hour

var greeting;

/*For the code below: If the current hour is above 18 then greeting will be Good evening; greater than 12 and it'll be Good Afternoon. If greater than zero, it'll be Good morning*/

if (hourNow > 18) {
  greeting = "Good Evening! Welcome to my Portfolio!"
} else if (hourNow > 12) {
  greeting = "Good Afternoon! Welcome to my Portfolio!"
} else if (hourNow > 0) {
  greeting = "Good Morning! Welcome to my Portfolio!"
} else {
  greeting = "Welcome! Welcome to my Portfolio!"
}

document.write("<h1>" + greeting + "<h1>")

/*created with the help of Jon Duckett's JavaScript textbook*/
