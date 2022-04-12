function hamburger () {

    const hamburgerDOM = document.querySelector('.hamburger');
    const navDOM = document.querySelector('header nav');

    hamburgerDOM.addEventListener('click', () => {
        navDOM.classList.toggle('hidden');
    })

    const navLinksDOM = document.querySelectorAll('header nav a');

    for (const navLink of navLinksDOM) {
            navLink.addEventListener('click', () => {
                navDOM.classList.add('hidden');
        })
    }
}

export { hamburger }