import { Application, KultPlugin, PluginBase } from '@kult/core';

@KultPlugin('Cors')
export default class Cors extends PluginBase {
  constructor(app: Application) {
    super(app)
  }
}
