// Array of colors for the greeting text
const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff"]

// Array of different greetings
const greetings = ["Hello World!", "Welcome!", "Greetings!", "Hi there!", "Bonjour!", "Hola!", "Ciao!"]

let currentColorIndex = 0
let currentGreetingIndex = 0

// Get DOM elements
const greeting = document.getElementById("greeting")
const changeColorBtn = document.getElementById("changeColorBtn")
const changeTextBtn = document.getElementById("changeTextBtn")

// Function to change the color of the greeting
function changeColor() {
  currentColorIndex = (currentColorIndex + 1) % colors.length
  greeting.style.color = colors[currentColorIndex]

  // Add a little animation effect
  greeting.style.transform = "scale(1.1)"
  setTimeout(() => {
    greeting.style.transform = "scale(1)"
  }, 200)
}

// Function to change the greeting text
function changeText() {
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length
  greeting.textContent = greetings[currentGreetingIndex]

  // Add a fade effect
  greeting.style.opacity = "0.5"
  setTimeout(() => {
    greeting.style.opacity = "1"
  }, 150)
}

// Add event listeners
changeColorBtn.addEventListener("click", changeColor)
changeTextBtn.addEventListener("click", changeText)

// Add some initial interactivity - change color every 3 seconds
setInterval(() => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  greeting.style.color = randomColor
}, 3000)

// Console message for developers
console.log("Hello World app loaded successfully! 🎉")
