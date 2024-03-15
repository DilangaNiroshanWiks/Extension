// Background script for ad-blocking

// Include the Chrome Extension API
const { webRequest } = chrome;

// Register an event listener for web requests
webRequest.onBeforeRequest.addListener(
  function(details) {
    // Check if the request URL is for a Google pagead
    if (details.url.includes("https://www.google.com/pagead/")) {
      return { cancel: true }; // Block the request
    }
  },
  { urls: ["<all_urls>"] }, // Listen for all web requests
  ["blocking"] // Set the listener to block requests
);
