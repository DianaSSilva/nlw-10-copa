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
        "03/12", "Sábado, Oitavas de Final",
      createGame("Netherlands", "12:00", "USA") +
      createGame("Argentina", "16:00", "Australia")
      )+
     
      createCard (
        "04/12", "Domingo, Oitavas de Final",
        createGame("France", "12:00", "Poland") +
        createGame("England", "16:00", "Senegal") 
      )+

      createCard (
        "05/12", "Segunda, Oitavas de Final",
        createGame("Japan", "12:00", "Croatia") +
        createGame("Brazil", "16:00", "Korea")
      )+
      createCard(
        "06/12", "Terça, Oitavas de Final",
        createGame("Morocco", "12:00", "Spain")+
        createGame("Portugal", "16:00", "Switzerland")
      ) +
      createCard(
        "09/12", "Sexta. Quartas de Final",
        createGame("Croatia", "12:00", "Brazil")+
        createGame("Netherlands", "16:00", "Argentina")
      )+
      createCard(
        "10/12", "Sábado. Quartas de Final",
        createGame("Morocco", "12:00", "Portugal")+
        createGame("England", "16:00", "France")
      )
      