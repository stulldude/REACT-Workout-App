import sendRequest from './send-request';

const BASE_URL = '/api/routines';

export function getAll() {
    return sendRequest(`${BASE_URL}/index`, 'GET');
}

export function getOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'GET');
}

export function handleROG(id, wIdx, eIdx) {
    return sendRequest(`${BASE_URL}/${id}/${wIdx}/${eIdx}`, 'PUT');
}
