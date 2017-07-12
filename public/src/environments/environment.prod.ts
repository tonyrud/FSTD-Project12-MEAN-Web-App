import { APP_CONFIG } from '../app.config';
import { Environment } from '../app/_interfaces/environment.interface';

export const environment: Environment = {
  production: true,
  apiUrl: 'http://104.131.45.241/api/',
  app_config: APP_CONFIG
}
