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
        "24/11", "Quinta",
      createGame("Switzerland", "07:00", "Cameroon") +
      createGame("Uruguay", "10:00", "Korea") +
      createGame("Portugal", "13:00", "Ghana") +
      createGame("Brazil", "16:00", "Serbia")
      ) +
     
      createCard (
        "25/11", "Sexta-feira",
        createGame("Wales", "07:00", "irão") +
        createGame("Qatar", "10:00", "Senegal") +
        createGame("Netherlands", "13:00", "Ecuador") +
        createGame("England", "16:00", "USA")
      )+

      createCard (
        "26/11", "Sábado",
        createGame("Tunisia", "07:00", "Australia") +
        createGame("Poland", "10:00", "SaudiArabia")+
        createGame("France", "13:00", "Denmark")+
        createGame("Argentina","16:00","Mexico")
      )+
      createCard(
        "27/11", "Domingo",
        createGame("Japan", "07:00", "CostaRica")+
        createGame("Belgium", "10:00", "Morocco")+
        createGame("Croatia", "13:00", "Canada")+
        createGame("Spain", "16:00", "germany")
      )+

      createCard(
        "28/11","Segunda",
        createGame("Cameroon", "07:00", "Serbia") +
        createGame("Korea","10:00", "Ghana") +
        createGame("Switzerland", "13:00", "Brazil") +
        createGame("Portugal", "16:00", "Uruguay") 
        ) +
        createCard(
        "29/11", "Terca-feira",
        createGame("Netherlands", "12:00", "Qatar")+
        createGame("Ecuador", "12:00", "Senegal")+
        createGame("Wales", "16:00", "England")+
        createGame("Irão", "16:00", "USA")
        )+
         createCard(
        "30/11", "Quarta-feira",
        createGame("Tunisia", "12:00", "France")+
        createGame("Australia", "12:00", "Denmark")+
        createGame("Poland", "16:00", "Argentina")+
        createGame("SaudiArabia", "16:00", "Mexico")
        )+
         createCard(
        "01/12", "Quinta-feira",
        createGame("Croatia", "12:00", "Belgium")+
        createGame("Canada", "12:00", "Morocco")+
        createGame("Japan", "16:00", "Spain")+
        createGame("CostaRica", "16:00", "Germany")
        )+
      createCard("02/12", "Sexta-feira", 
      createGame("Korea", "12:00","Portugal") +
      createGame("Ghana", "12:00","Uruguay") +
      createGame("Brazil", "16:00", "Cameroon")+
      createGame("Serbia", "16:00", "Switzerland"))
    
  
  
  