// Copying the list of stack on the clipboard
const copy = document.getElementById("copy");
const area = document.getElementById("area");

copy.addEventListener("click", () => {
  let text = area.value.trim();
  navigator.clipboard.writeText(text);
  alert("Text Copied");
});
