function ready() {
  document.body.style.backgroundColor = "red";
  document.getElementsByClassName("container")[0].getElementsByTagName('h3')[0].innerText = "pwned";
}

document.addEventListener("DOMContentLoaded", ready);

