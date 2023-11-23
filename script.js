// Set the date of the countdown (New Year's Eve)
const countdownDate = new Date("January 1, 2024 00:00:00").getTime();

// Update the countdown every second
const timer = setInterval(function() {
  // Get current date and time
  const now = new Date().getTime();
  
  // Calculate the time remaining
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerText = days + "d";
  document.getElementById("hours").innerText = hours + "h";
  document.getElementById("minutes").innerText = minutes + "m";
  document.getElementById("seconds").innerText = seconds + "s";

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(timer);
    document.querySelector('.countdown').innerHTML = "<h1>Happy New Year!</h1>";
  }
}, 1000);
