function nav (selector) {

    const formatTitle = (str) => {
        const parts = str.split('-');
        return parts.join(' ');
    }

    if (typeof selector !== 'string' || selector === '') {
        return false;
    }

    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }

    const bodyChilderDOM = document.querySelectorAll('body > *');
    let HTML = '';

    for (const sectionDOM of bodyChilderDOM) {

        if (sectionDOM.id) {
            HTML += `<a class="header-link" href="#${sectionDOM.id}">${formatTitle(sectionDOM.id)}</a>`;
        } 
    }   
    return DOM.innerHTML = HTML;
}

export { nav }