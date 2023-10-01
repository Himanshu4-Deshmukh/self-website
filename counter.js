// Get the current visitor count and total visitor count from local storage or initialize them
let currentVisitorCount = parseInt(localStorage.getItem('currentVisitorCount')) || 0;
let totalVisitorCount = parseInt(localStorage.getItem('totalVisitorCount')) || 0;

// Increment the current visitor count
currentVisitorCount++;

// Update the visitor counts in local storage
localStorage.setItem('currentVisitorCount', currentVisitorCount);
localStorage.setItem('totalVisitorCount', ++totalVisitorCount);

// Display the visitor counts on the page after page loads
window.addEventListener('load', function() {
  const currentVisitorCountElement = document.getElementById('currentVisitorCount');
  const totalVisitorCountElement = document.getElementById('totalVisitorCount');

  currentVisitorCountElement.textContent = currentVisitorCount.toString();
  totalVisitorCountElement.textContent = totalVisitorCount.toString();
});
