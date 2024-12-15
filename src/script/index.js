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