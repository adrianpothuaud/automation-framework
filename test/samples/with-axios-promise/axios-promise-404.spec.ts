import {AxiosResponse} from 'axios';
import assert from 'assert';
import {expect} from 'chai';

import {axiosPromise} from '../../../src/api-utils';
import {customAssert} from '../../../src/custom-assert';

describe('@sample @api @axios-promise @post Axios Promise util', function() {
  let apiResponse: AxiosResponse;
  it('send NOT FOUND GET request', async function() {
    apiResponse = await axiosPromise(
        'get',
        'https://api.github.com/foo_bar_not_exist',
        null,
        {},
    );
  });
  it('verify status code - 1', function() {
    customAssert.apiResponse.isNotFound(apiResponse);
  });
  it('send NOT FOUND POST request', async function() {
    apiResponse = await axiosPromise(
        'post',
        'https://api.github.com/foo_bar_not_exist',
        null,
        {},
    );
  });
  it('verify status code - 2', function() {
    customAssert.apiResponse.isNotFound(apiResponse);
  });
});
