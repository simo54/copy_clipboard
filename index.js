// Declaring variables
const copy = document.getElementById("copy");
const area = document.getElementById("area");

// Provide listener to button
copy.addEventListener("click", () => {
  // Get value of textarea
  let text = area.value.trim();

  // Call clipboard writeText that return a promise
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Success");
    })
    .catch((err) => console.log(err));
  console.log(text);
  alert("Text Copied");
});
