const API_URL = 
"https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/recipes"

const state = {
    events: (),
};


// ***************Selectors***************

const eventList = document.querySelector("#events");
addEvent.addEventListener("submit", addEvent);


// *******************CRUD Methods********************

async function render() {
    await getEvents();
    renderEvents();

}
render();

// update state with events from API

async function getEvents() {
    try {
        const response = await fetch(API_URL);
        const  json = await response.json();
        state.events = json.date;

    } catch (error) {
        console.error(error);
    }
}

// render events from state

function renderEvents() {
    if (!state.events.length) {
        eventList.innerHTML = "<li>No Events.</li>";
        return;
      }
 
      const eventCards = state.events.map((event) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <h2>${event.name}</h2>
          <p>${artist.description}</p>
          <p>${event.date}</p>
        `;
        return li;
      });
 
      eventList.replaceChildren(...eventCards);
}


async function addEvent(event) {
    event.preventDefault();

    try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: addEvent.name.valueOf,
            description: addArtistForm.description.value,
            date: addEvent.date.value,
          }),
        });
 
        if (!response.ok) {
          throw new Error("Failed to create event");
        }
 
        render();
      } catch (error) {
        console.error(error);
      }
}