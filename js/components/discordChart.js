function discordChart (selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const column = data[i];
        const pixelNumber = data[i].value * 0.85;

        HTML += `<div class="chart">
                    <div class="value">${column.value} millions</div>
                    <div class="bar" style="height: ${pixelNumber}px"></div>
                    <div class="year">${column.year}</div>
                </div>`
    }
    return DOM.innerHTML += HTML;
}

export { discordChart }