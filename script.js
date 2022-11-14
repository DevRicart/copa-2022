let delay = -0.8;
function createCard(date, day, games) {
  delay = delay + 0.8;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
  <ul>
    ${games}
  </ul>
  </div>
  `
}

function createGame(player1, hour, player2) {
  return `
  <li>
  <img src="./Assets/icon-${player1}.svg" alt="${player1}">
  <strong>${hour}</strong>
  <img src="./Assets/icon-${player2}.svg" alt="${player2}">
</li>   
  `
}

document.querySelector('#cards').innerHTML = 

createCard("24/10", "Quinta", 
  createGame("switzerland", "07:00", "cameroon") +
  createGame("uruguai", "10:00", "southkorea") +
  createGame("portugal", "13:00", "ghana") +
  createGame("brazil", "16:00", "serbia")) +
  

createCard("25/10", "sexta", 
  createGame("wales", "07:00", "iran") +
  createGame("qatar", "10:00", "senegal") +
  createGame("netherlands", "13:00", "ecuador") +
  createGame("england", "16:00", "unitedstates")) 
 
