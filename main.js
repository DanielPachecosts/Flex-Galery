const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
    
}

function toggleActive(e) {
    // console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
    // se usa el includes porque en algunos browser como safari la propiedad solo aparece como flex. 
}

panels.forEach(panel =>
    panel.addEventListener('click', toggleOpen)
);

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))