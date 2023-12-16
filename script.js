function generateMeaning(response) {
    new Typewriter("#response", {
      strings: response.data.answer,
      autoStart: true,
      delay: 2,
      cursor: ""
    });
}



function generateName(event) {
    event.preventDefault();

let instructionInput = document.querySelector("#user-instructions");
let name = document.querySelector("#name");
name.innerHTML =
  instructionInput.value.charAt(0).toUpperCase() +
  instructionInput.value.slice(1);
 let apiKey = "b58a2f047af526to478d86be21c3e75d";
 let context= "Nice explanation of what certain human name means. Make sure to use user instructions."
 let prompt = `User instructions: generate name meaning ${instructionInput.value}`; 
 let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
 console.log(apiUrl);

 
 axios.get(apiUrl).then(generateMeaning);
}

let formGenerator = document.querySelector(".form");
formGenerator.addEventListener("submit", generateName);
