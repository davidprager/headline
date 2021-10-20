/*
 * File: Headline.js
 * -----------------
 * This program displays the text of the string MESSAGE on the screen in an animated way that moves it across
 * the display from left-to-right.  When the message scrolls off the screen, it will automatically re-start.
 * The animation is started and stopped by a mouse click.  The font color will start with a random color and change
 * to a different color on each restart of the animation
 */

"use strict";

/* Constants */

const GWINDOW_WIDTH = 500;
const GWINDOW_HEIGHT = 100;
const TIME_STEP = 20;
const DELTA_X = -2;
const MESSAGE = "Coding with Javascript is cool";
// todo : Set up constants for the font and font size


/*
 * Defines the entire program.  Variables declared inside Headline
 * function are accessible to every function defined within it.
 */

function Headline() {
   let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
   let timer = undefined;
   // todo : Call the input validation function
   // todo : Set up GLabel object with an upper case version of the message, the specified font and font size
   // todo : Add the GLabel object to the right of the Graphics window centered vertically
   // todo : Add an event listener to detect a mouse click

/* This function is called each time the interval timer ticks to update the animation */
   function timerTicked() {
      // todo : move the message
      // todo : check if the message has scrolled off the window, in which case reset its position
   }

/*
 * This function is called when the user clicks on the window.  It starts or stops the animation and changes
 * the font color
 */
   function startStopAnimation(){
      // todo : if the timer is stopped, then change the font color and start the timer
      // todo : if the timer is started, stop it.
   }
   
   /*
   /* This function checks that the message to be displayed is betwen 20 and 30 characters long
   /* If not, it displays an appropriate message in the graphics window
   */
   function validateInput() {
	  // todo : check to make sure the message is between 20 and 30 characters.  If not, display an appropriate message
   }  
}
