const submit = document.getElementById("submit");

const inputs = document.querySelectorAll(".iniInput input");
const subject = document.getElementById("subject");
const message = document.querySelector("#message");

submit.addEventListener("click", () => {
  for (const input of inputs) {
    console.log(input.value);
  }
  
  // get user selected subject
  const userSubject = subject.options[subject.selectedIndex].text;
  console.log(userSubject);

  console.log(message.value);
});