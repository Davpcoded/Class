/**
 * The app should countdown from 5, and when the countdown is finished
 * it should print one word to the screen every second. Each word
 * replaces the other.
 */

/* PSEUDO CODE
  1. make sure there is a place to display the countdown
  2. make sure there is a place to display the word
  3. break the poem up into individual words
  4. start a countdown timer that ticks every second
     - with each tick display the time left in the count down
     - decrement the time left
     - if the time left is 0 then stop the timer and clear the count down display
  5. display the first word
  6. start a timer that ticks every second
     - with each tick, display the next word in the list
     - if there are no more words, clear the timer
*/

var poem =
  "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");

var wordSpeed = 1000;

function prepareRead() {
  // Create the countdown timer.
  var timeLeft = 5;
  var countDownEl = document.getElementById("countDown");
  countDownEl.textContent = timeLeft;
  var countDownTimer = setInterval(function() {
    timeLeft--;
    countDownEl.textContent = timeLeft;
    if (timeLeft === 0) {
      countDownEl.textContent = "";
      clearInterval(countDownTimer);
      speedRead();
    }
  }, 1000);
}

function speedRead() {
  var wordEl = document.getElementById("word");
  var currentIndex = 0;
  wordEl.textContent = words[currentIndex];
  // Print words to the screen one at a time.
  var wordTimer = setInterval(function() {
    currentIndex++;
    if (currentIndex === words.length) {
      clearInterval(wordTimer);
    } else {
      wordEl.textContent = words[currentIndex];
    }
  }, wordSpeed);
}

prepareRead();
