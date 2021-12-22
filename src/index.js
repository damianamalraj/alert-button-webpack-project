const body = document.querySelector("body");
const btn = document.createElement("button");

btn.innerText = "Alert!";
body.append(btn);

btn.addEventListener("click", (event) => {
    alert("You just clicked on the BUTTON!");
});
