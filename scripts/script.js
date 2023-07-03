var counter = 0;

document.getElementById("increase-btn").addEventListener("click", function() {
  counter++;
  document.getElementById("counter").textContent = counter;
});

document.getElementById("decrease-btn").addEventListener("click", function() {
  if (counter > 0) {
    counter--;
    document.getElementById("counter").textContent = counter;
  }
});
