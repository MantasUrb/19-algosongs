function hamburger () {

    const hamburgerDOM = document.querySelector('.hamburger');
    const navDOM = document.querySelector('header nav');
    const buttonsDOM = document.querySelectorAll('.btn');

    hamburgerDOM.addEventListener('click', () => {
        navDOM.classList.toggle('hidden');
        for (let buttonDOM of buttonsDOM) {
            buttonDOM.classList.toggle('hidden');
        }
    })

    const navLinksDOM = document.querySelectorAll('header nav a');

    for (const navLink of navLinksDOM) {
            navLink.addEventListener('click', () => {
                navDOM.classList.add('hidden');
        })
    }
}

export { hamburger }