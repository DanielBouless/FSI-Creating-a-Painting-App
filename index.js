let startColor = 'blue'
const color = document.querySelector('.palette')
color.addEventListener('click', function(e){
    startColor = e.target.id
})
const painting = document.querySelector('.painting')
painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = startColor

    
})
