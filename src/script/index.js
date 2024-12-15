function handleMouseEnter(){
    this.classList.add('b-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('b-card--hovered');
    document.body.id = '';
}

function addEventListenerToCards(){
    const cardElements = document.getElementsByClassName('b-card');

    for(let i = 0; i < cardElements.length; i++){
        const card = cardElements[i];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }

}

document.addEventListener("DOMContentLoaded", addEventListenerToCards, false);

function selectCarouselItem(selectedButtonElement){
    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.b-card-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.b-controller__button--active');
    activeButtonElement.classList.remove('b-controller__button--active');
    selectedButtonElement.classList.add('b-controller__button--active');
}