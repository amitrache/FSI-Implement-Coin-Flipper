// TODO: Declare any global variables we need

let heads = 0;
let tails = 0;
let total = heads + tails;
let headsPercent = 0;
let tailsPercent = 0;

document.addEventListener("DOMContentLoaded", function () {
  // TODO: Add event listener and handler for flip and clear buttons
  document.querySelector("#flip").addEventListener("click", function () {
    let randomChance = Math.random();
    console.log(randomChance);
    if (randomChance < 0.495) {
      document.querySelector("#penny-image").src =
        "./assets/images/penny-tails.jpg";
      document.querySelector("#message").textContent = "You flipped tails!";
      tails++;
      total++;
      tailsPercent = Math.round((tails / total) * 100);
      document.querySelector("#tails").textContent = tails;
      document.querySelector("#tails-percent").textContent = tailsPercent + "%";
      if (heads > 0) {
        headsPercent = Math.round((heads / total) * 100);
      }
      document.querySelector("#heads-percent").textContent = headsPercent + "%";
    } else {
      document.querySelector("#penny-image").src =
        "./assets/images/penny-heads.jpg";
      document.querySelector("#message").textContent = "You flipped heads!";
      heads++;
      total++;
      headsPercent = Math.round((heads / total) * 100);
      document.querySelector("#heads").textContent = heads;
      document.querySelector("#heads-percent").textContent = headsPercent + "%";
      if (tails > 0) {
        tailsPercent = Math.round((tails / total) * 100);
      }
      document.querySelector("#tails-percent").textContent = tailsPercent + "%";
    }
  });

  document.querySelector("#clear").addEventListener("click", function () {
    heads = 0;
    tails = 0;
    headsPercent = 0;
    tailsPercent = 0;
    total = heads + tails;
    document.querySelector("#heads").textContent = 0;
    document.querySelector("#heads-percent").textContent = 0 + "%";
    document.querySelector("#tails").textContent = 0;
    document.querySelector("#tails-percent").textContent = 0 + "%";
    document.querySelector("#penny-image").src =
      "./assets/images/penny-heads.jpg";
    document.querySelector("#message").textContent = "Let's Get Rolling!";
  });
  // Flip Button Click Handler
  // TODO: Determine flip outcome
  // TODO: Update image and status message in the DOM

  // Update the scorboard
  // TODO: Calculate the total number of rolls/flips
  // Make variables to track the percentages of heads and tails
  // TODO: Use the calculated total to calculate the percentages
  // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
  // TODO: Update the display of each table cell

  //
  //

  //

  // Clear Button Click Handler
  // TODO: Reset global variables to 0
  // TODO: Update the scoreboard (same logic as in flip button click handler)
});
