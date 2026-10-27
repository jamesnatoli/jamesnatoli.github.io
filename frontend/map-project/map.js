// Base API URL config - update this value based on your deployment environment
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://127.0.0.1:5000'
    : 'https://ts.net'; // Your reverse proxy domain

/**
 * Fetches coordinate and location metadata from the FastAPI backend server
 */
async function fetchMapData() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/map-data`);
        
        if (!response.ok) {
            throw new Error(`HTTP error network status: ${response.status}`);
        }
        
        const locations = await response.ok ? await response.json() : [];
        console.log("Successfully fetched map markers:", locations);
        
        // Execute UI rendering logic with the location data array
        renderMapPoints(locations);
        
    } catch (error) {
        console.error("Failed to retrieve map markers from backend service:", error);
        displayMapErrorState(error.message);
    }
}

/**
 * Interface update function to place pins/markers 
 * @param {Array} locations - List of geographical points from the API
 */
function renderMapPoints(locations) {
    locations.forEach(point => {
        console.log(`Placing marker: ${point.name} at [Lat: ${point.lat}, Lng: ${point.lng}]`);
        // If using Leaflet.js, map rendering would go here:
        // L.marker([point.lat, point.lng]).addTo(map).bindPopup(point.description);
    });
}

/**
 * Updates UI layout in the event of an API breakdown
 * @param {string} errorMessage 
 */
function displayMapErrorState(errorMessage) {
    const statusEl = document.getElementById('map-status');
    if (statusEl) {
        statusEl.textContent = `Error reaching map server: ${errorMessage}`;
        statusEl.style.color = '#ef4444';
    }
}

// Trigger initial fetch when DOM content finishes loading safely
document.addEventListener('DOMContentLoaded', fetchMapData);
