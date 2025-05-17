const container = document.getElementById('container');
const icon = document.getElementById('toggleIcon');
const hint = document.getElementById('hintText');

const icons = ['☁️', '🪽', '🤍'];
const bgColors = ['#ffffff', '#f0f7ff', '#e0f7fa'];

let currentIndex = 0;
let hintVisible = false;

function toggleIconAndBg(){
    if(!hintVisible){
        hint.classList.add('visible');
        hintVisible = true;
    }

    currentIndex = (currentIndex + 1) % icons.length;
    icon.textContent = icons[currentIndex];
    container.style.backgroundColor = bgColors[currentIndex];

    if(icons[currentIndex] !== '☁️')icon.classList.add('active');
    else icon.classList.remove('active');
}

container.addEventListener('click', toggleIconAndBg);

container.addEventListener('keydown', e =>{
    if (e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        toggleIconAndBg();
    }
});