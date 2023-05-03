import { displayTime } from "./clock.js";

// display the time initially
displayTime();

// update the time every second
setInterval(displayTime, 1000);

// Load the Google Custom Search Engine script asynchronously
const script = document.createElement("script");
script.async = true;
script.src = "https://cse.google.com/cse.js?cx=12cc501042a7a47f0";
document.head.appendChild(script);

// Wait for the script to load
script.addEventListener("load", () => {
  // Get the search element from the HTML
  const searchElement = document.querySelector(".gcse-search");

  // Set the data-api-key attribute
  searchElement.setAttribute(
    "data-api-key",
    "AIzaSyDCCPQ4F535kWIbVLwDHFUWe7MAgyFsbKo"
  );
});
