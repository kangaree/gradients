// Set initial gradient to current hour
const body = document.body;
body.classList.add(`g${new Date().getHours()}`);