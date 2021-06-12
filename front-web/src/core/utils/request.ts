import axios, { Method } from 'axios';

type RequestParams = {
    method?: Method;
    url: string;
    data?: object;
    params?: object;
}

const BASE_URL = 'http://localhost:3000';

export const makeRequest = ({ method = 'GET', url, data, params }: RequestParams) => {
    return axios({
        method, // when key and value is same you dont need to write key: value
        url: `${BASE_URL}${url}`,
        data,
        params
    });
}