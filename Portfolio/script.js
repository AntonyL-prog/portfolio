const local = "en";

const translations = {
  // English translations
  "en": {
    "app-title": "CV",
    "lead": "Welcome to my little spot on the interwebs!",
  }
};

//Translation function
function translateElement(element) {
    const key = element.getAttribute("data-i18n-key");
    const translation = translations[local][key];
    element.innerText = translation;
}

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()
    //Adding Localization
    document.querySelectorAll(['data-i18n-key']).forEach(translateElement);
    let btn = document.getElementById('btn')
    // let print = document.getElementById('print')
    console.log("it work")
    btn.addEventListener("click", event => {
        console.log("Button Pressed")
        window.print(document);
        // print.style.visibility = 'visible';
    })
})