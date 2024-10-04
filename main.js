import './style.scss';
import renderHeader from './components/header/header.js';
import renderChartBox from './components/chart/chart.js';

/**
 * Fetches data from the '/data.json' endpoint and returns it as a JSON object.
 * @returns {Promise<Object>} The data from the JSON file.
 */
const getData = async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
};

/**
 * Renders the application by fetching the data and rendering the header and chart components.
 * The chart component will display the spending data from the fetched data.
 * @returns {void}
 */
const renderApp = async () => {
  const data = await getData();
  const app = document.getElementById('app');
  app.innerHTML += renderHeader();
  app.innerHTML += renderChartBox(data);
}

renderApp();