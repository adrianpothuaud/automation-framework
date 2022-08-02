import axios, {AxiosResponse} from 'axios';
import assert from 'assert';

describe('@sample @api Sample API test with axios', function() {
  let apiResponse: AxiosResponse;
  it('Sends a GET request to https://api.github.com/zen', async function() {
    apiResponse = await axios.get('https://api.github.com/zen');
  });
  it('Verify response status code', async function() {
    assert.equal(apiResponse.status, 200);
  });
});
