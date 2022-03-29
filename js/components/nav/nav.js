function nav (selector) {

    const formatTitle = (str) => {
        if (str === "nfts") {
            return "NFTs"
        }
        const parts = str.split('-');
        return parts.join(' ');
    }

    if (typeof selector !== 'string' ||
        selector === '') {
        return false;
    }

    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }

    const bodyChilderDOM = document.querySelectorAll('body > *');
    const ctaButton = `<a class="button" href='https://calendly.com/' targer='_blank'>Contact</a>`

    for (const sectionDOM of bodyChilderDOM) {
        if (sectionDOM.id) {
            let HTML = `<a href="#${sectionDOM.id}">${formatTitle(sectionDOM.id)}</a>`;
            DOM.insertAdjacentHTML('beforeend', HTML);
        } 
    }   
    return DOM.insertAdjacentHTML('beforeend', ctaButton);
}

export { nav }