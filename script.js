// script.js
document.getElementById('search-button').addEventListener('click', function () {
  const query = document.getElementById('search-bar').value;
  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});

document.getElementById('sign-in').addEventListener('click', function () {
  alert('Sign In clicked!');
});