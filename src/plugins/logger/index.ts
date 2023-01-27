import { Application, KultPlugin, PluginBase } from '@kult/core';

@KultPlugin('Logger')
export default class Logger extends PluginBase {
  constructor(app: Application) {
    super(app)
  }
}
