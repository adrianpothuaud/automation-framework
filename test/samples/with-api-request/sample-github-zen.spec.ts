import {AxiosResponse} from 'axios';
import assert from 'assert';
import {githubApi} from '../../../src/api-requests/github';

describe(
    '@sample @api @api-request Sample API test with framework api-request',
    function() {
      let apiResponse: AxiosResponse;
      it('Sends a GET zen request', async function() {
        apiResponse = await githubApi.getZen();
      });
      it('Verify response status code', async function() {
        assert.equal(apiResponse.status, 200);
      });
    },
);

