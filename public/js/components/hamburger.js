function hamburger () {

    const hamburgerDOM = document.querySelector('.hamburger');
    const navDOM = document.querySelector('header nav');
    const navLinksDOM = document.querySelectorAll('header nav a');
    const headerlogoDOM = document.querySelector('.logo');

    hamburgerDOM.addEventListener('click', () => {

        navDOM.classList.toggle('hidden');

        setTimeout(() => {
            navDOM.classList.toggle('mobile-active');
          }, 1)
        
        if (!navDOM.classList.contains("hidden")) {
            hamburgerDOM.classList.replace("fa-bars", "fa-times")
        }
        else {
            hamburgerDOM.classList.replace("fa-times", "fa-bars");
            }
    })

    for (const navLink of navLinksDOM) {
            navLink.addEventListener('click', () => {
                navDOM.classList.add('hidden');
                navDOM.classList.remove('mobile-active');
                hamburgerDOM.classList.replace("fa-times", "fa-bars");
        })
    }

    headerlogoDOM.addEventListener('click', () => {
        navDOM.classList.add('hidden');
        navDOM.classList.remove('mobile-active');
        hamburgerDOM.classList.replace("fa-times", "fa-bars");
    })
    
}

export { hamburger }