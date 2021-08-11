export function setLocalRoutine(routine) {
    localStorage.removeItem('routine');
    localStorage.setItem('routine', JSON.stringify(routine));
}

export function getLocalRoutine() {
    return JSON.parse(localStorage.getItem('routine'));
}