               ////old way
// const domElements = document.querySelectorAll('#messages')
// domElements.forEach(domElement => {
//     const newdomElement = document.createElement("p")
//     newdomElement.innerText = "waka waka";
//     domElement.appendChild(newdomElement);
// });

let domFragment = document.createDocumentFragment()
const domElements = document.querySelectorAll('#messages')
domElements.forEach(domElement => {
    const newdomElement = document.createElement("p")
    newdomElement.innerText = "waka waka";
    domFragment.appendChild(newdomElement);
});

document.querySelector("#messagesArticle").appendChild(domFragment)