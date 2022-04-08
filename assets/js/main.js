const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

// Genero il markup da inserire nel file HTML con una funzione
/**
 * ## Funzione per generare il markup da inserire all'interno della pagina HTML
 * @param {object} memberObject Inserire l'array di oggetti dei membri del team
 * @returns Il markup da inserire all'interno della pagina
 */
function generateMarkup(memberObject) {
    return `
    <div class="member">
        <img src="./assets/img/${memberObject.image}">
        <div class="details">
            <h3>${memberObject.name}</h3>
            <p>${memberObject.role}</p>
        </div>
    </div>`

}

// Genero la funzione per creare le card dei membri del team
function generateTeamCards() {
    const teamElement = document.querySelector(".team"); // seleziono l'elemento in cui inserire le card
    teamElement.innerHTML = ""; // pulisco il div per evitare che ricrei tutte le cards
    // console.log(teamElement);
    for (i = 0; i < team.length; i++) { // creo un ciclo che mi permette di selezionare ogni elemento
        const member = team[i];
        //console.log(member);
        const memberMarkup = generateMarkup(member);
        teamElement.insertAdjacentHTML("beforeend", memberMarkup);
    }
}

generateTeamCards();

// Creo la funzione per aggiugere membri al team tramite il form

const formElement = document.querySelector(".form");
    // creo l'eventListener
formElement.addEventListener("submit", function(event) {
    event.preventDefault();

    //console.log(event);
    // prendo i valori dei campi che sono stati compilati
    const nameValue = event.target.name.value;
    const roleValue = event.target.role.value;
    const imageValue = event.target.image.value;
    const newMember = {
        name: nameValue,
        role: roleValue,
        image: imageValue
    }
    //console.log(newMember);
    team.push(newMember);
    generateTeamCards();

    document.getElementById("name").innerHTML = "";
    document.getElementById("role").innerHTML = "";
    document.getElementById("image").innerHTML = "";
})