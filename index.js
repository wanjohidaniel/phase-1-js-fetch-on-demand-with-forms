const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
  });
  