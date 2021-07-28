'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores=[0,0];
let currentScore=0;
let activePlayer=0;
let playing=true;
btnRoll.addEventListener('click',function()
{
    if(playing)
    {
        let dice = Math.trunc(Math.random()*6)+1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        if(dice!==1)
        {
            currentScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }
        else
        {
            document.getElementById(`current--${activePlayer}`).textContent=0;
            activePlayer=activePlayer^1;
            currentScore=0;
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active');
        }
    }
});
btnHold.addEventListener('click',function()
{
    if(playing)
    {
        scores[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        document.getElementById(`current--${activePlayer}`).textContent=0;
        currentScore=0;
        if(scores[activePlayer]>=100)
        {
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
            document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
            playing=false;
            diceEl.classList.add('hidden');
        }
        else
        {
            activePlayer=activePlayer^1;
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active');
        }
    }
});
btnNew.addEventListener('click',function()
{
    currentScore=0;
    current0El.textContent=0;
    current1El.textContent=0;
    score0El.textContent=0;
    score1El.textContent=0;
    document.querySelector(`.player--${activePlayer}`).classList.remove(`player--winner`);
    player0El.classList.add('player--active');
    playing=true;
    scores[0]=0;
    scores[1]=0;
    activePlayer=0;
});

