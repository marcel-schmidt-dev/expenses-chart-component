/**
 * Renders the chart box component with the provided chart data.
 * The chart box includes a heading, a chart representing the spending data,
 * a summary of the total spending for the month, and a comparison to the previous month.
 *
 * @param {Array} chartData - An array of objects representing the spending data.
 * Each object should have the following properties:
 *   - {string} day: The day of the week.
 *   - {number} amount: The spending amount for that day.
 * @returns {string} - The HTML string for the chart box component.
 */

export default function renderChartBox(chartData) {
    const summary = getSummary(chartData);

    return /*html*/`
        <div class="chart-box">
            <div class="heading-l">Spending - Last 7 days</div>
            ${getChart(chartData)}
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
        </div>
    `;
};

/**
 * Calculates the total spending amount from the provided chart data.
 *
 * @param {Array} chartData - An array of objects representing the spending data.
 * Each object should have the following properties:
 *   - {string} day: The day of the week.
 *   - {number} amount: The spending amount for that day.
 * @returns {string} The total spending amount formatted as a currency string.
 */
const getSummary = (chartData) => {
    let total = 0;
    chartData.forEach(item => {
        total += item.amount;
    });
    return `$${total.toFixed(2)}`;
};

/**
 * Generates the HTML for the chart items based on the provided chart data.
 * Each chart item includes a bar representing the amount and a caption for the day.
 * The bar with the highest amount is highlighted.
 * 
 * @param {Array} chartData - An array of objects representing the chart data.
 * Each object should have 'amount' and 'day' properties.
 * @returns {string} - The HTML string for the chart items.
 */
const getChart = (chartData) => {
    const highestAmount = getHighestAmount(chartData);
    const heightUnit = 150 / highestAmount;
    let chartItems = '';
    chartData.forEach(item => {
        chartItems += /*html*/`
        <div class="chart-item">
            <div class="bar ${item.amount === highestAmount ? 'highlight' : ''}" style="height: ${item.amount * heightUnit}px"></div>
            <div class="mini-caption day">${item.day}</div>
        </div>`;
    });

    return /*html*/`
        <div class="chart">${chartItems}</div>
    `;
};


/**
 * Finds and returns the highest amount from the chart data.
 * @param {Array} chartData - An array of objects representing the chart data.
 * Each object should have an 'amount' property.
 * @returns {number} - The highest amount found in the chart data.
 */
const getHighestAmount = (chartData) => {
    let highestAmount = 0;
    chartData.forEach(item => {
        if (item.amount > highestAmount) {
            highestAmount = item.amount;
        }
    });
    return highestAmount;
};