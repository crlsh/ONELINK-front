// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/* import { domain, clientId } from '../../auth_config.json';

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
}; */

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
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
