import { Env } from '@kult/core';

export default {
  port: Env.get('PORT', 3000),
};
