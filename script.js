//we catch the button and changes the background
const redButton = document.querySelector('.red').addEventListener('click', () => document.body.style.backgroundColor = 'red');
const blueButton = document.querySelector('.blue').addEventListener('click', () => document.body.style.backgroundColor = 'blue');
const blackButton = document.querySelector('.black').addEventListener('click', () => document.body.style.backgroundColor = 'black');
const normalButton = document.querySelector('.normal').addEventListener('click', () => document.body.style.backgroundColor = 'white'); 

// we catch every picture profile 
const tiger = document.querySelector('.tigerrr');
const nature = document.querySelector('.naturee'); 
const sea = document.querySelector('.seaa');
const oli = document.querySelector('.olii');
const bmth = document.querySelector('.bmthh'); 
const home = document.querySelector('.homee')

//we cath the button and changes the background
const bckAnimal = document.querySelector('.animal').addEventListener('click', () => tiger.classList.toggle('tiger-1'))
const bckNature = document.querySelector('.nature').addEventListener('click', () => nature.classList.toggle('nature-1'));
const bckSea = document.querySelector('.sea').addEventListener('click', () => sea.classList.toggle('sea-1'));
const bckBmth = document.querySelector('.bmth').addEventListener('click', () => oli.classList.toggle('.oli-1'));
const bckAsal = document.querySelector('.asal').addEventListener('click', () => home.classList.toggle('home-1')); 
