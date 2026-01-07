// When the "Start Your Journey" button is clicked, go to the next page
document.getElementById('startBtn').addEventListener('click', () => {
  // For now, just alert — later we will add real navigation
  alert('Let’s start your journey! Next, we will ask you some questions.');
  
  // In the future: window.location.href = 'page2.html';
});
document.getElementById('startBtn').addEventListener('click', () => {
  window.location.href = 'info.html';
});
