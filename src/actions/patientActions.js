// add a new patient
export const addPatient = (patient) => {
    return {type: 'ADD_PATIENT', patient}
}

// Should connect to server, fetch all patients
export const setPatients = (patients) => {
    return {type: 'SET_PATIENT', patients}
}

