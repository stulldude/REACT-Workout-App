import sendRequest from "./send-request";

const BASE_URL = '/api/routineInfo';

export function getUserRoutineInfo() {
    return sendRequest(`${BASE_URL}`);
}

export function setUserRoutine(routine) {
    return sendRequest(`${BASE_URL}/routine/set`, `PUT`, { routine })
}

export async function createUserRoutineInfo(userRoutineInfo) {
    return sendRequest(`${BASE_URL}/create`, "POST", userRoutineInfo)
}