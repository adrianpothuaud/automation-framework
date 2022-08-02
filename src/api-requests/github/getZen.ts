import {AxiosResponse} from 'axios';
import {axiosPromise} from '../../api-utils';

const url = 'https://api.github.com/zen';

type GitHubZenResponse = {
  data: string
}

export const getZen = (): Promise<AxiosResponse<GitHubZenResponse>> => {
  return axiosPromise(
      'get',
      url,
      null,
      {
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
  );
};
