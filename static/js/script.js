// Global variables for tracking statistics
let headsCount = 0;
let tailsCount = 0;
let totalCount = 0;
let isFlipping = false;

// DOM elements
const coin = document.getElementById('coin');
const flipBtn = document.getElementById('flipBtn');
const result = document.getElementById('result');
const resultValue = document.getElementById('resultValue');
const headsCountEl = document.getElementById('headsCount');
const tailsCountEl = document.getElementById('tailsCount');
const totalCountEl = document.getElementById('totalCount');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners
    flipBtn.addEventListener('click', flipCoin);
    coin.addEventListener('click', flipCoin);
    
    // Load saved statistics from localStorage
    loadStats();
    updateStatsDisplay();
});

// Main coin flip function
async function flipCoin() {
    if (isFlipping) return; // Prevent multiple flips at once
    
    isFlipping = true;
    flipBtn.disabled = true;
    flipBtn.innerHTML = '<span class="button-text">Flipping...</span>';
    
    // Hide previous result
    result.classList.add('hidden');
    
    // Add flipping animation to coin
    coin.classList.add('flipping');
    
    try {
        // Make API call to get flip result
        const response = await fetch('/flip');
        const data = await response.json();
        const flipResult = data.result;
        
        // Wait for animation to complete
        setTimeout(() => {
            // Show the result
            showResult(flipResult);
            
            // Update statistics
            updateStats(flipResult);
            
            // Show the correct side of coin
            showCoinSide(flipResult);
            
            // Reset UI state
            coin.classList.remove('flipping');
            isFlipping = false;
            flipBtn.disabled = false;
            flipBtn.innerHTML = '<span class="button-text">Flip Again</span>';
        }, 2000); // Match the CSS animation duration
        
    } catch (error) {
        console.error('Error flipping coin:', error);
        
        // Reset UI state on error
        coin.classList.remove('flipping');
        isFlipping = false;
        flipBtn.disabled = false;
        flipBtn.innerHTML = '<span class="button-text">Try Again</span>';
        
        // Show error message
        alert('Oops! Something went wrong. Please try again.');
    }
}

// Show the flip result
function showResult(flipResult) {
    resultValue.textContent = flipResult.toUpperCase();
    result.classList.remove('hidden');
}

// Show the correct side of the coin
function showCoinSide(flipResult) {
    if (flipResult === 'heads') {
        coin.style.transform = 'rotateY(0deg)';
    } else {
        coin.style.transform = 'rotateY(180deg)';
    }
}

// Update statistics
function updateStats(flipResult) {
    totalCount++;
    
    if (flipResult === 'heads') {
        headsCount++;
    } else {
        tailsCount++;
    }
    
    updateStatsDisplay();
    saveStats();
}

// Update the statistics display
function updateStatsDisplay() {
    headsCountEl.textContent = headsCount;
    tailsCountEl.textContent = tailsCount;
    totalCountEl.textContent = totalCount;
}

// Save statistics to localStorage
function saveStats() {
    const stats = {
        headsCount: headsCount,
        tailsCount: tailsCount,
        totalCount: totalCount
    };
    localStorage.setItem('coinFlipStats', JSON.stringify(stats));
}

// Load statistics from localStorage
function loadStats() {
    const savedStats = localStorage.getItem('coinFlipStats');
    if (savedStats) {
        const stats = JSON.parse(savedStats);
        headsCount = stats.headsCount || 0;
        tailsCount = stats.tailsCount || 0;
        totalCount = stats.totalCount || 0;
    }
}



// Add keyboard support
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
        flipCoin();
    }
});

// Add reset stats functionality (double-click on stats to reset)
document.querySelector('.stats').addEventListener('dblclick', function() {
    if (confirm('Are you sure you want to reset all statistics?')) {
        headsCount = 0;
        tailsCount = 0;
        totalCount = 0;
        updateStatsDisplay();
        saveStats();
        
        // Show reset confirmation
        result.innerHTML = '<div class="result-text">Statistics Reset!</div>';
        result.classList.remove('hidden');
        
        setTimeout(() => {
            result.classList.add('hidden');
        }, 2000);
    }
});

// Add smooth scrolling for better mobile experience
if (window.innerWidth <= 768) {
    coin.addEventListener('click', function() {
        setTimeout(() => {
            result.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 1000);
    });
}
