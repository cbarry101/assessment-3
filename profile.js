color = document.querySelector('#color');
place = document.querySelector('#place')
ritual = document.querySelector('#ritual')


function favoriteColor(evt){
    alert('My favorite color is grey')
}
function favoritePlace(evt){
    alert('My favorite place is San Diego')
}
function favoriteRitual(evt){
    alert('My favorite ritual is reading before bed')
}



color.addEventListener('click', favoriteColor)
place.addEventListener('click', favoritePlace)
ritual.addEventListener('click', favoriteRitual)

