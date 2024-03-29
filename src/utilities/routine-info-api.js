import sendRequest from "./send-request";

const BASE_URL = '/api/routineInfo';

export function getUserRoutineInfo() {
    return sendRequest(`${BASE_URL}`, "GET");
}

export function setUserRoutine(routineId) {
    return sendRequest(`${BASE_URL}/${routineId}`, `POST`)
}

export async function createUserRoutineInfo(userRoutineInfo) {
    return sendRequest(`${BASE_URL}/create`, "POST", userRoutineInfo);
}

export function dayCompleted() {
    return sendRequest(`${BASE_URL}/day`, "POST");
}

export async function addCompletedExercises(workoutIdx) {
    return sendRequest(`${BASE_URL}/${workoutIdx}`, "PUT");
}