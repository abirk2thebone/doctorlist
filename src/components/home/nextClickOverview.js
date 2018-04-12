import React from 'react';
import {connect} from 'react-redux';

const patientOverview = (boolean) => {
if (boolean === true)
    <h2> Patient information registered: </h2>
            this.props.patients.map((patient, i) => 
            <div>
            <h2> Age: {patient.age}</h2>
            <h2> Weight: {patient.weight}</h2>
            </div>
            )}


export default patientOverview;