function iconRotates () {

    const buttonsDOM = document.querySelectorAll('button');
    const iconsDOM = document.querySelectorAll('.icon');
    
    for (let buttonDOM of buttonsDOM) {
        buttonDOM.addEventListener('mouseover', () => {
            for (let iconDOM of iconsDOM) {
                iconDOM.classList.add('iconMoves');
            }
        })
        buttonDOM.addEventListener('mouseleave', () => {
            for (let iconDOM of iconsDOM) {
                iconDOM.classList.remove('iconMoves');
            }
        })
    }
}

export { iconRotates };