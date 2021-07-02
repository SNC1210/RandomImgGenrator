
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_butn = document.getElementById('cat_butn');
const dog_butn = document.getElementById('dog_butn');

cat_butn.addEventListener('click',getRandomCat);
dog_butn.addEventListener('click',getRandomDog);

function getRandomCat(){
    fetch('https://aws.random.cat/meow')
         .then(res => res.json())
         .then(data => {
             cat_result.innerHTML= 
            `<img src="${data.file}"/>`
         })
}

function getRandomDog(){
    fetch('https://random.dog/woof.json')
         .then(res => res.json())
         .then(data => {
             dog_result.innerHTML=
             `<img src="${data.url}"/>`
         })
}