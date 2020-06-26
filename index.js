document.addEventListener("DOMContentLoaded", function(){
/***** Deliverable 1 *****/
  const header = document.querySelector("#header")
  console.log("Here's your header:", header)


/***** Deliverable 2 *****/
  header.style.color = "red"


/***** Deliverable 3 *****/
  console.log("PLAYERS array looks like this:", PLAYERS)
  
  PLAYERS.forEach(player => {
    let playerDiv = document.createElement('div')
    let playerContainer = document.querySelector('.player-container')
    playerDiv.innerHTML += `
    <div class="player" data-number="${player.number}">
    <h3>
    ${player.name} (<em>${player.nickname}</em>)
    </h3>
    <img src="${player.photo}" alt="${player.name}">
    </div>
    `
    playerContainer.append(playerDiv)
  })
   
 
/***** Deliverable 4 *****/
let container = document.querySelector('.player-container')
let badPlayer = container.querySelector("[data-number='7']")
badPlayer.remove()





})