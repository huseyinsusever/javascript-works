# javascript-works
function createHeaders(N) {
  let container = document.getElementById("headerContainer");
  for (let i = 1; i <= N; i++) {
    let header = document.createElement("h2");
    header.textContent = "Number page: " + i;
    container.appendChild(header);
  }
}
createHeaders(9);
