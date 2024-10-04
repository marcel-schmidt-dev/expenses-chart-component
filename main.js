import './style.scss';
import renderHeader from './components/header/header.js';
import renderChartBox from './components/chart/chart.js';

const getData = async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
};

const renderApp = async () => {
  const data = await getData();
  const app = document.getElementById('app');
  app.appendChild(renderHeader());
  app.appendChild(renderChartBox(data));
}

renderApp();