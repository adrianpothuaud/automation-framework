import {AxiosResponse} from 'axios';
import assert from 'assert';

export const isNotFound = (apiResponse: AxiosResponse): void => {
  assert.equal(apiResponse.status, 404);
};
