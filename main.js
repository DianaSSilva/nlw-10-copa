function createGame(player1, hour, player2) {
    return `
      <li>
        <div class="tooltip"> 
          <span class="tooltiptext"> ${player1}</span>
          <img class="tooltipicon" src="./assets/icon-${player1}.png" alt="Bandeira do ${player1}" />
        </div>
        <strong>${hour}</strong>
        <div class="tooltip"> 
          <span class="tooltiptext"> ${player2}</span>
          <img class="tooltipicon" src="./assets/icon-${player2}.png" alt="Bandeira da ${player2}" />
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
      createGame("Switzerland", "07:00", "Cameroon") +
      createGame("Uruguay", "10:00", "Korea") +
      createGame("Portugal", "13:00", "Ghana") +
      createGame("Brazil", "16:00", "Serbia")) +
     
      createCard(
        "28/11","segunda",
        createGame("Cameroon", "07:00", "Serbia") +
        createGame("Korea","10:00", "Ghana") +
        createGame("Switzerland", "13:00", "Brazil") +
        createGame("Portugal", "16:00", "Uruguay") 
        ) +
      createCard("02/12", "sexta", 
      createGame("Korea", "12:00","Portugal") +
      createGame("Ghana", "12:00","Uruguay") +
      createGame("Brazil", "16:00", "Cameroon"))
    
  
  
  