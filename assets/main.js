const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const displayIcon = document.querySelector('.display i');
const computerdisplayIcon = document.querySelector('.computer i');
const randomIconok = ["fa-regular fa-hand-back-fist", "fa-regular fa-hand","fa-regular fa-hand-scissors"];
const text = document.getElementById('text');
let computerScore = 1;
let playerScore = 1;
let count = 0;
let draw = 0;

const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
           let clickedBtn = e.target.className;
           displayIcon.className = clickedBtn;
           // random generátor
           let randomNum = Math.floor(Math.random() * randomIconok.length);
           count++;
           rnd.innerHTML = count;
           computerdisplayIcon.className = randomIconok[randomNum];
           
           if(displayIcon.className === computerdisplayIcon.className) {
                draw++;
                drw.innerHTML = draw;
                pScore.innerHTML = pScore.innerHTML;
                cScore.innerHTML = cScore.innerHTML;
                text.innerHTML = "Döntetlen!";
                text.style.color = 'orange';
           } 
          
           else if(displayIcon.className === randomIconok[0] && computerdisplayIcon.className === randomIconok[2]) {
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "Nyertél!";
               text.style.color = 'rgb(122, 232, 88)';
           }
           else if(displayIcon.className === randomIconok[0] && computerdisplayIcon.className === randomIconok[1]) {
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "Vesztettél!";
               text.style.color = '#ff7154';
           }
           else if(displayIcon.className === randomIconok[1] && computerdisplayIcon.className === randomIconok[2]) {
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "Vesztettél!";
               text.style.color = '#ff7154';
           }
           else if(displayIcon.className === randomIconok[1] && computerdisplayIcon.className === randomIconok[0]) {
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "Nyertél!";
               text.style.color = 'rgb(122, 232, 88)';
           }
           else if(displayIcon.className === randomIconok[2] && computerdisplayIcon.className === randomIconok[0]) {
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "Vesztettél!";
               text.style.color = '#ff7154';
           }
           else if(displayIcon.className === randomIconok[2] && computerdisplayIcon.className === randomIconok[1]) {
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "Nyertél!";
               text.style.color = 'rgb(122, 232, 88)';
           }
        });
    });
}

game();