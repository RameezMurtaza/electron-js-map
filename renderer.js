// Initialize the map in the div with id 'map'
const map = L.map('map').setView([51.505, -0.09], 13); // Set the starting position and zoom level

// Add OSM tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);
