import { Container } from "./component/container.js";

const app = document.getElementById('app');
const container = new Container();

app.appendChild(container.render())