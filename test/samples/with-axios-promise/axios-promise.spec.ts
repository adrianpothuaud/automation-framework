import assert from 'assert';
import {AxiosResponse} from 'axios';

import {ipJsontestApi} from '../../../src/api-requests/ip.jsontest';
import {customAssert} from '../../../src/custom-assert';

describe('@sample @api @axios-promise @post Axios Promise util', function() {
  let apiResponse: AxiosResponse;
  it('send ip.jsontest POST request', async function() {
    apiResponse = await ipJsontestApi.post();
  });
  it('verify status code', function() {
    customAssert.apiResponse.isOk(apiResponse);
  });
  it('verify body attribute', function() {
    assert.notEqual(apiResponse.data.ip, undefined);
  });
});
