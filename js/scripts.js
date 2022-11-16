const questions = document.getElementsByClassName("question");

let i, j;
let currentId = null;

for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    const title = this.getElementsByTagName("h2");
    const text = this.getElementsByTagName("p");

    let setClasses = !title[0].classList.contains("active");

    /* Restore accordion to inital state */
    for (j = 0; j < questions.length; j++) {
      questions[j].getElementsByTagName("h2")[0].classList.remove("active");
      questions[j].getElementsByTagName("p")[0].style.display = "none";
    }

    if (setClasses) {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      title[0].classList.toggle("active");

      /* Toggle between hiding and showing the text */
      if (text[0].style.display === "block") {
        text[0].style.display = "none";
      } else {
        text[0].style.display = "block";
      }
    }
  });
}
