const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "",
  },
];

function main() {
    const listaTotal = document.querySelector(".lista"); 
    
    console.log(listaTotal);   
    while (listaTotal.firstChild) {
      listaTotal.removeChild(listaTotal.firstChild);
  }

    for (let i = 0; i<cosasQueAprendimos.length; i++){
        let newLi = document.createElement("li"); 
        newLi.textContent = cosasQueAprendimos[i].tema;
        if (cosasQueAprendimos[i].class){
          newLi.classList.add(cosasQueAprendimos[i].class);
        }
        listaTotal.appendChild(newLi); 
      }
}

main();
