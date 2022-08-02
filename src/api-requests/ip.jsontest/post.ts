import {AxiosResponse} from 'axios';
import {axiosPromise} from '../../api-utils';

type PostResponse = {
  ip: string
}

export const post = (): Promise<AxiosResponse<PostResponse>> => axiosPromise(
    'post',
    'http://ip.jsontest.com/',
    {},
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
);
