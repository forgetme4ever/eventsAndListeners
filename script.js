const btn = document.getElementById('btn');
const square = document.getElementById('square');
const text = document.getElementById('text');
const circle = document.getElementById('circle');
const btnInCircle = document.getElementById('e_btn');
const slider = document.getElementById('range');
const span = document.getElementById('range-span')

const colorChange = (event) => {
    let color = event.target.value;
    square.style.backgroundColor = color;
    console.log(color);
};


const radiusChange = (event) => {
    
    span.textContent = event.target.value;
    circle.style.width = event.target.value + '%';
    circle.style.height = event.target.value + '%';
};

btn.addEventListener('click', text.addEventListener('change', colorChange));


btnInCircle.style.display = 'none';

slider.addEventListener('change', radiusChange);
slider.addEventListener('range', radiusChange)






