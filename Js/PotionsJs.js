/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('Make your own potion!');


// deckaratie DOM elementen
var sunButton = document.querySelector('#sun');
var bloodButton = document.querySelector('#blood');
var snowButton = document.querySelector('#snow');

var loveButton = document.querySelector('#love');
var angelButton = document.querySelector('#angel');
var starlightButton = document.querySelector('#starlight');

var potionButton = document.querySelector('#potion');
var cauldronElement = document.querySelector('#cauldron');
var recipeElement = document.querySelector('#recipe');
var emptyButton = document.querySelector('#empty');
var timer = document.querySelector('#potion');

//toestand: globale variabelen/constanten initialiseren
var ingredient1 = 'none';
var ingredient2 = 'none';
var ingredient1Tekst = 'none';
var ingredient2Tekst = 'none';
var potion1 = 'ENERGY POTION';
var potion2 = 'ELIXIR OF LIFE';
var potion3 = 'ICE POWERS PHILTRE';
var potion4 = 'HEALTH ELIXIR';
var potion5 = 'DRAUGHT OF STRENGTH';
var potion6 = 'IMMORTALITY PHILTRE';
var potion7 = 'DRAUGHT OF PEACE';
var potion8 = 'DRAUGHT OF SLEEP';
var potion9 = 'NECROMANCY ELIXIR';


// eventHandler functie : gooiDobbelsteen
function klikEmpty(){
    ingredient1 = 'none';
    ingredient2 = 'none';
        if(ingredient1 == 'none' && ingredient2 == 'none'){
            cauldronElement.src = "Images/cauldron-" + ingredient1 + "-" + ingredient2 + ".jpg";
            recipeElement.textContent = "There is nothing in the cauldron yet. Quick! Add something!";
        }  
    cauldronElement.classList.remove("potion");
    recipeElement.classList.remove("text");
    document.getElementById("h3").style.display = "block"; 
    potionButton.disabled = true;
    
    clearTimeout(timer);
    
    console.log ('You emptied the cauldron');
}

function klikPotion(){
    cauldronElement.src = "Images/potion-" + ingredient1 + "-" + ingredient2 + ".png";
        if (ingredient1 == 'love' && ingredient2 == 'sun'){
            recipeElement.textContent = potion1;
        }
        if (ingredient1 == 'love' && ingredient2 == 'blood'){
            recipeElement.textContent = potion2;
        }
        if (ingredient1 == 'love' && ingredient2 == 'snow'){
            recipeElement.textContent = potion3;
        }
    
    
        if (ingredient1 == 'angel' && ingredient2 == 'sun'){
            recipeElement.textContent = potion6;
        }
        if (ingredient1 == 'angel' && ingredient2 == 'blood'){
            recipeElement.textContent = potion4 ;
        }
        if (ingredient1 == 'angel' && ingredient2 == 'snow'){
            recipeElement.textContent = potion5 ;
        }
    
        
        if (ingredient1 == 'star' && ingredient2 == 'sun'){
            recipeElement.textContent = potion7;
        }
        if (ingredient1 == 'star' && ingredient2 == 'blood'){
            recipeElement.textContent = potion9;
        }
        if (ingredient1 == 'star' && ingredient2 == 'snow'){
            recipeElement.textContent = potion8;
        }
    
    timer = setTimeout(klikEmpty, 15000);
    
    cauldronElement.classList.add("potion");
    recipeElement.classList.add("text");
    document.getElementById("h3").style.display = "none";     //bron:https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
    console.log('YOUR POTION IS.....');
    
}

function klikLove (){
    ingredient1 = 'love';
    ingredient1Tekst = 'a tear born from love';
    cauldronElement.src = "Images/cauldron-" + ingredient1 + "-" + ingredient2 + ".jpg";
    var recipeIng1 = 'You have added ' + ingredient1Tekst + '.';
        if(ingredient1 == 'love'){
            recipeElement.textContent = recipeIng1;
        }
    var recipeMix = 'You have mixed ' + ingredient1Tekst + ' and ' + ingredient2Tekst + '. Do you wanna see what potion you`ll get? Click down here!';
        if(ingredient2 == 'sun'){
            recipeElement.textContent = recipeMix;
        }
        if (ingredient2 == 'blood'){
            recipeElement.textContent = recipeMix;
        }
        if (ingredient2 == 'snow'){
            recipeElement.textContent = recipeMix;
        }
    cauldronElement.classList.remove("potion");
    recipeElement.classList.remove("text");
    document.getElementById("h3").style.display = "block";
    
    clearTimeout(timer);
    console.log('An ingredient has been added');
}

function klikAngel (){
    ingredient1 = 'angel';
    ingredient1Tekst = 'an angel`s grace';
    var recipeIng1 = 'You have added ' + ingredient1Tekst + '.';
    cauldronElement.src = "Images/cauldron-" + ingredient1 + "-" + ingredient2 + ".jpg";
        if(ingredient1 == 'angel'){
            recipeElement.textContent = recipeIng1;
        }
    var recipeMix = 'You have mixed ' + ingredient1Tekst + ' and ' + ingredient2Tekst + '. Do you wanna see what potion you`ll get? Click down here!';
        if(ingredient2 == 'sun'){
            recipeElement.textContent = recipeMix;
        }
        if (ingredient2 == 'blood'){
            recipeElement.textContent = recipeMix;
        }
        if (ingredient2 == 'snow'){
            recipeElement.textContent = recipeMix;
        }
    cauldronElement.classList.remove("potion");
    recipeElement.classList.remove("text");
    document.getElementById("h3").style.display = "block";
    
    clearTimeout(timer);
    console.log('An ingredient has been added');
}
function klikStarlight (){
    ingredient1 = 'star';
    ingredient1Tekst = 'starlight form the longest night';
    var recipeIng1 = 'You have added ' + ingredient1Tekst + '.';
    cauldronElement.src = "Images/cauldron-" + ingredient1 + "-" + ingredient2 + ".jpg";
        if (ingredient1 == 'starlight from the longest night'){
            recipeElement.textContent = recipeIng1;
        }
    var recipeMix = 'You have mixed ' + ingredient1Tekst + ' and ' + ingredient2Tekst + '. Do you wanna see what potion you`ll get? Click down here!';
        if(ingredient2 == 'sun'){
            recipeElement.textContent = recipeMix;
        }
        if (ingredient2 == 'blood'){
            recipeElement.textContent = recipeMix;
        }
        if (ingredient2 == 'snow'){
            recipeElement.textContent = recipeMix;
        }
    cauldronElement.classList.remove("potion");
    recipeElement.classList.remove("text");
    document.getElementById("h3").style.display = "block";
    
    clearTimeout(timer);
    console.log('An ingredient has been added');
}
function klikSun (){
    ingredient2 = 'sun';
    ingredient2Tekst = 'a drop of the sun';
    var recipeIng2 = 'You have added ' + ingredient2Tekst + '.';
    cauldronElement.src = "Images/cauldron-" + ingredient1 + "-" + ingredient2 + ".jpg";
        if (ingredient2 == 'sun'){
            recipeElement.textContent = recipeIng2;
        }
    var recipeMix = 'You have mixed ' + ingredient1Tekst + ' and ' + ingredient2Tekst + '. Do you wanna see what potion you`ll get? Click down here!';
        if(ingredient1 == 'love'){
            recipeElement.textContent = recipeMix;
        }
        if(ingredient1 == 'angel'){
            recipeElement.textContent = recipeMix;
        }
        if (ingredient1 == 'star'){
            recipeElement.textContent = recipeMix;
        }
    cauldronElement.classList.remove("potion");
    recipeElement.classList.remove("text");
    document.getElementById("h3").style.display = "block";
    
    clearTimeout(timer);
    console.log('An ingredient has been added');
}
function klikBlood (){
    ingredient2 = 'blood';
    ingredient2Tekst = 'a dead man`s blood';
    var recipeIng2 = 'You have added ' + ingredient2Tekst + '.';
    cauldronElement.src = "Images/cauldron-" + ingredient1 + "-" + ingredient2 + ".jpg";
        if (ingredient2 == 'blood'){
            recipeElement.textContent = recipeIng2;
        }
     var recipeMix = 'You have mixed ' + ingredient1Tekst + ' and ' + ingredient2Tekst + '. Do you wanna see what potion you`ll get? Click down here!';
        if(ingredient1 == 'love'){
            recipeElement.textContent = recipeMix;
        }
        if(ingredient1 == 'angel'){
            recipeElement.textContent = recipeMix;
        }
        if (ingredient1 == 'star'){
            recipeElement.textContent = recipeMix;
        }
    cauldronElement.classList.remove("potion");
    recipeElement.classList.remove("text");
    document.getElementById("h3").style.display = "block";
    
    clearTimeout(timer);
    console.log('An ingredient has been added');
}
function klikSnow (){
   ingredient2 = 'snow';
    ingredient2Tekst = 'snow from the coldest winter';
    var recipeIng2 = 'You have added ' + ingredient2Tekst + '.';
    cauldronElement.src = "Images/cauldron-" + ingredient1 + "-" + ingredient2 + ".jpg";
        if (ingredient2 == 'snow'){
            recipeElement.textContent = recipeIng2;
        }
    var recipeMix = 'You have mixed ' + ingredient1Tekst + ' and ' + ingredient2Tekst + '. Do you wanna see what potion you`ll get? Click down here!';
        if(ingredient1 == 'love'){
            recipeElement.textContent = recipeMix;
        }
        if(ingredient1 == 'angel'){
            recipeElement.textContent = recipeMix;
        }
        if (ingredient1 == 'star'){
            recipeElement.textContent = recipeMix;
        }
    cauldronElement.classList.remove("potion");
    recipeElement.classList.remove("text");
    document.getElementById("h3").style.display = "block";
    
    clearTimeout(timer);
    console.log('An ingredient has been added');
}





//eventListener toevoegen aan DOM element
// 'click'
loveButton.addEventListener('click', klikLove);
angelButton.addEventListener('click', klikAngel);
starlightButton.addEventListener('click', klikStarlight);
sunButton.addEventListener('click', klikSun);
bloodButton.addEventListener('click', klikBlood);
snowButton.addEventListener('click', klikSnow);
potionButton.addEventListener('click', klikPotion);
emptyButton.addEventListener('dblclick', klikEmpty);
timer.addEventListener('click', klikPotion);