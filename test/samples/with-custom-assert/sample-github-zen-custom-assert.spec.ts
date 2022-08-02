import {AxiosResponse} from 'axios';

import {githubApi} from '../../../src/api-requests/github';
import {customAssert} from '../../../src/custom-assert';

describe(
    '@sample @api @api-request @custom-assert Sample API test',
    function() {
      let apiResponse: AxiosResponse;
      it('Sends a GET zen request', async function() {
        apiResponse = await githubApi.getZen();
      });
      it('Verify response status code', async function() {
        customAssert.apiResponse.isOk(apiResponse);
      });
    },
);

