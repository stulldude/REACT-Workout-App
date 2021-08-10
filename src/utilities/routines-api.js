import sendRequest from './send-request';

const BASE_URL = '/api/routines';

export function getAll() {
    return sendRequest(`${BASE_URL}/index`, 'POST');
}