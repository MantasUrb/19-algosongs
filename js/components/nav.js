function nav (selector) {

    const formatTitle = (str) => {
        const parts = str.split('_');
        const firstWord = parts[0];
        const firstUp = firstWord[0].toUpperCase() + firstWord.slice(1);
        parts[0] = firstUp;
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
    console.log(bodyChilderDOM);
    let HTML = '';

    for (const sectionDOM of bodyChilderDOM) {
        if (sectionDOM.id) {
            HTML += `<a class="header-link" href="#${sectionDOM.id}">${formatTitle(sectionDOM.id)}</a>`;
        } 
    }  

    return DOM.innerHTML = HTML;
}

export { nav }