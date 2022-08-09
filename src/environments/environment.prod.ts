
import config from '../../auth_config.json';

const { domain, clientId, audience, apiUri, errorPath, serverUrl } = config as {
  domain: string;
  clientId: string;
  audience?: string;
  apiUri: string;
  errorPath: string;
  serverUrl: string;
};

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    ...(audience && audience !== 'htpp://localhost:8080/' ? { audience } : null),
    redirectUri: window.location.origin,
    errorPath,
  },
  dev: {
    serverUrl,
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
};
