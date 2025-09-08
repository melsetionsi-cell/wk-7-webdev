// GLOBAL VARIABLE
let animationCount = 0;

/* Part 2: Functions with Parameters & Return Values */

// Function to increment and return animation count
function updateAnimationCount(incrementBy) {
  animationCount += incrementBy;
  return animationCount; // demonstrates return values
}

// Function with local scope
function randomColor() {
  const colors = ["coral", "teal", "gold", "purple"];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index]; // return a random color
}

/* Part 3: Combining JS with CSS Animations */

// Animate the box on button click
document.getElementById("animateBox").addEventListener("click", function() {
  const box = document.querySelector(".box");

  // Change background color using our reusable function
  box.style.background = randomColor();

  // Trigger animation class
  box.classList.add("animate");

  // Remove the class after animation ends so it can replay
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  });

  // Log the animation count
  console.log("Box animated:", updateAnimationCount(1), "times");
});

// Flip the card on button click
document.getElementById("flipCard").addEventListener("click", function() {
  const card = document.querySelector(".card");
  card.classList.toggle("flipped");
});
