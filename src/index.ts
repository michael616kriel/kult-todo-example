import { Application } from '@kult/core';
import bodyParser from 'koa-bodyparser'

const app = new Application();
app.server.server.use(bodyParser())
app.start();