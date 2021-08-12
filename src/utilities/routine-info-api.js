import sendRequest from "./send-request";

const BASE_URL = '/api/routineInfo';

export function getUserRoutineInfo() {
    return sendRequest(`${BASE_URL}`);
}

export function setUserRoutine(routineId) {
    return sendRequest(`${BASE_URL}/${routineId}`, `POST`)
}

export async function createUserRoutineInfo(userRoutineInfo) {
    return sendRequest(`${BASE_URL}/create`, "POST", userRoutineInfo)
}