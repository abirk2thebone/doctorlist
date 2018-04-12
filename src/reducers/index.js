import {combineReducers} from 'redux';
import patientReducer from './patientReducer'


const allReducers = combineReducers({
    //patients: PatientList
    // Can take in more reducers, e.g.:
    // movies: MoviesReducer
    patients: patientReducer
}); 

export default allReducers;