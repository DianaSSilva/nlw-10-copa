function createGame(player1, hour, player2) {
    return `
      <li>
        <div class="tooltip"> 
          <span class="tooltiptext"> ${player1}</span>
          <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        </div>
        <strong>${hour}</strong>
        <div class="tooltip"> 
          <span class="tooltiptext"> ${player2}</span>
          <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
        </div>  
      </li>
    `
  }
  let delay = -0.3;
  function createCard(date, day, games) {
    delay = delay + 0.3; 
    return `
      <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
    `
  }
  
  document.querySelector("#cards").innerHTML = 
      createCard(
        "24/11", "quinta",
      createGame("Suiça", "07:00", "Camarões") +
      createGame("Uruguai", "10:00", "Coreia do Sul") +
      createGame("Portugal", "13:00", "Gana") +
      createGame("Brasil", "16:00", "Servia")) +
     
      createCard(
        "28/11","segunda",
        createGame("Camarões", "07:00", "Servia") +
        createGame("Coreia do Sul","10:00", "Gana") +
        createGame("Suiça", "13:00", "Brasil") +
        createGame("Portugal", "16:00", "Uruguai") 
        ) +
      createCard("02/12", "sexta", 
      createGame("Coreia do Sul", "12:00","Portugal") +
      createGame("Gana", "12:00","Uruguai") +
      createGame("Brasil", "16:00", "Camarões"))
    
  
  
  