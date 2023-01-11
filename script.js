function toggleTheme() {
  const body = document.body;

  /* trocar fundo */
  if (body.classList.contains('light')) {
    body.classList.remove("light")
  }
  else {
    body.classList.add("light")
  }

  /* trocar foto */
  // const img = document.createElement('img')
  const img = document.querySelector("#profile img");

  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/leo-light.jpg")
  } else {
    img.setAttribute("src", "./assets/leo-dark.jpg")
  }

}
