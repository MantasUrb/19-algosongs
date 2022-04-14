function hamburger () {

    const hamburgerDOM = document.querySelector('.hamburger');
    const navDOM = document.querySelector('header nav');
    const navLinksDOM = document.querySelectorAll('header nav a');
    const headerlogoDOM = document.querySelector('.logo');

    hamburgerDOM.addEventListener('click', () => {
        navDOM.classList.toggle('hidden');
    })

    for (const navLink of navLinksDOM) {
            navLink.addEventListener('click', () => {
                navDOM.classList.add('hidden');
        })
    }

    headerlogoDOM.addEventListener('click', () => {
        navDOM.classList.add('hidden');
    })
    
}

export { hamburger }