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
  createGame("brazil", "16:00", "serbia") +
  createGame("brazil", "17:00", "serbia")) +

createCard("24/10", "Quinta", 
  createGame("brazil", "16:00", "serbia") +
  createGame("brazil", "17:00", "serbia")) 
 
