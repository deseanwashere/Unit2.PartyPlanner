const API_URL =`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events`


const partyForm = document.getElementById('partyForm');
// const partyList = document.getElementById('partyList');

const state = {
  parties: [],
}

// const partyList = document.querySelector("#parties")

// const addPartyForm = document.querySelector("#addParties");
// addPartyForm.addEventListener("submit", addParty)

// GET PARTIES MAYNE!

const getParties = async () => {
try {
  const response = await fetch(API_URL);
  const result = await response.json();
  console.log(result)
}
catch (error) {
  throw error 
}

}

//  RENDER PARTIES MAYNE!

async function renderParties() {
  state.parties.forEach((parties) => {
    const li = document.createElement('li');
    li.innerHTML = `${parties.name} - ${parties.description}`;
    partyList.appendChild(li);

  })

   await getParties();
}

getParties();




//  POST THE PARTIES MAYNE!










//  DELETE THE PARTIES MAYNE!

const clickMe = document.querySelector("button1")
console.log(clickMe)

const deleteMe = document.querySelector("button")
console.log(deleteMe)

const guests = [{id: 1,
  name: "Guest Name",
  email: "guest@email.com",
  phone: "123-456-7890",
   },
  
  {id: 2,
  name: "CHEST NAME",
  email: "chest@yahoo.com",
  phone: "333-333-3333",},

{id: 1,
  name: "Guest Name",
  email: "guest@email.com",
  phone: "123-456-7890",
  },

  {id: 1,
    name: "Guest Name",
    email: "guest@email.com",
    phone: "123-456-7890",
    },

    {id: 1,
  name: "Guest Name",
  email: "guest@email.com",
  phone: "123-456-7890",}
]
  



   
  

