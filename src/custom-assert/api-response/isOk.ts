import {AxiosResponse} from 'axios';
import assert from 'assert';

export const isOk = (apiResponse: AxiosResponse): void => {
  assert.equal(apiResponse.status, 200);
};
