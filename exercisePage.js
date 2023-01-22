// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {
  let muscle = "";
  $w("#dropdown").onChange(function () {
    muscle = $w("#dropdown").value;
    let xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      ` https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`
    );
    xhr.setRequestHeader(
      "X-Api-Key",
      "q7s2IpsZ5yhK5AjX0m4D7Q==pQnoLiFnhvkWeDtK"
    );
    xhr.onload = function () {
      let data = JSON.parse(this.responseText);
      let ex1 = data[0];
      let ex2 = data[1];
      $w(
        "#displayExercise"
      ).html = `<h2><u>${ex1["name"]}</u></h2> <br> <h6 style="color:green">Muscle : ${ex1["muscle"]} | Equipment : ${ex1["equipment"]} | Difficulty : ${ex1["difficulty"]} <br> <h6 style="font-weight:400"> Instructions: ${ex1["instructions"]}</h6>`;
      $w(
        "#displayExercise"
      ).html += `<br><br> <h2><u>${ex2["name"]}</u></h2> <br> <h6 style="color:green">Muscle : ${ex2["muscle"]} | Equipment : ${ex2["equipment"]} | Difficulty : ${ex2["difficulty"]} <br> <h6 style="font-weight:400"> Instructions: ${ex2["instructions"]}</h6>`;
    };
    xhr.send();
  });
});
