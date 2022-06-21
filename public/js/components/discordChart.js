function discordChart (selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const column = data[i];
        const pixelNumber = data[i].value;

        HTML += `<div class="chart">
                    <div class="value">${column.value} millions</div>
                    <div class="progress" style="height: ${pixelNumber}px">
                        <div class="bar"></div>
                    </div>
                    <div class="year">${column.year}</div>
                </div>`
    }
    DOM.innerHTML += HTML;

    const discordChartsDOM = document.querySelectorAll('.chart');
   
    for (const discordChartDOM of discordChartsDOM) {

        addEventListener('scroll', () => {

            const elementTop = discordChartDOM.getBoundingClientRect().top;
            const elementHeight = discordChartDOM.clientHeight;

            const isVisible = innerHeight >= elementTop + elementHeight;
        
            if (isVisible) {
                discordChartDOM.classList.add('animate');
            }
        })
    }
            
}
export { discordChart }