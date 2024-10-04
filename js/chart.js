export const renderChartBox = (chartData) => {
    const summary = getSummary(chartData);
    const chartItems = getChartItems(chartData);
    const chartRef = document.createElement('div');
    chartRef.classList.add('chart-box');

    chartRef.innerHTML = /*html*/`
        <div class="heading-l">Spending - Last 7 days</div>
        <div class="chart">${getChartItems(chartData)}</div>
        <hr>
        <div class="chart-info">
            <div>
                <span class="mini-caption">Total this month</span>
                <span class="heading-xl">${summary}</span>
            </div>
            <div>
                <span class="body-bold">+2.4%</span>
                <span class="mini-caption">from last month</span>
            </div>
        </div>
    `

    return chartRef;
};

const getSummary = (chartData) => {
    let total = 0;
    chartData.forEach(item => {
        total += item.amount;
    });
    return `$${total.toFixed(2)}`;
};

const getChartItems = (chartData) => {
    const highestAmount = Math.max(...chartData.map(item => item.amount));
    const heightUnit = 150 / highestAmount;
    const chartItems = chartData.map(item => {
        return /*html*/`
            <div class="chart-item">
                <div class="bar ${item.amount === highestAmount ? 'highlight' : ''}" style="height: ${item.amount * heightUnit}px"></div>
                <div class="mini-caption day">${item.day}</div>
            </div>`;
    });

    return chartItems.join('');
};