import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPatient} from '../../actions/patientActions';
import {setPatient} from '../../actions/patientActions';
import {nextIsClicked} from '../../components/home/nextClickOverview'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import _ from 'lodash';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patient: "",
            inputNextClick: false
        }         
    }
    
    onNextButtonClick = () => { 
        const patient = {age: this.refs.ageInput.value, 
                         gender: this.refs.genderInput.value,
                         height: this.refs.heightInput.value,
                         weight: this.refs.weightInput.value,
                         bloodType: this.refs.bloodTypeInput.value
                        }
        this.props.addPatient(patient)
        inputNextClick: true
        //this.props.nextIsClicked(inputNextClick)
        console.log(patient.age)
        //this.props.dispatch({type:"yo", patient:patient})
    }

    
    /* handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.value}`);
      } */

    // patientGender = getElementById("gender"); 
    // genderCertifier = () => {
    //     switch(patientGender.options[patientGender.selectedIndex].text){
    //         case "Male":
    //             break;
    //         case "Female":
    //             break;
    //         case "Transgender":
    //             break;
    //         default:
    //             console.log("Please select a valid option for gender.")
    //     }
    // }

    render = () => {
        return <div className="inputForm">
            <h1>Input patient information:</h1>
            <input type="number" placeholder="Insert age here" ref = "ageInput" />
            {/* <input type="text" placeholder="Insert gender here" ref = "genderInput"/> */}
            <select id = "gender">
            <option value ="noneSelected" ref = "genderInput">Select gender</option>
            <option value="male" ref = "genderInput">Male</option>
            <option value="female" ref = "genderInput">Female</option>
            </select>
            
            {/* <div style = {{width: 170}}>
            <Select
            name="form-field-name"
            placeholder = "Katt"
            onChange={this.handleChange}
            options={[
            { value: 'one', label: 'fyhfygfyuf' },
            { value: 'two', label: 'jbjhvjhvjhv' },
            ]}
            />
            </div> */}
            <input type="text" placeholder="Insert height type here" ref = "heightInput"/>
            <input type="number" placeholder="Insert weight here" ref = "weightInput"/>
            {/* <input type="text" placeholder="Insert blood type here" ref = "bloodInput"/> */}
            <select id = "bloodType">
            <option value ="noneSelected" ref = "bloodTypeInput">Select blood type</option>
            <option value="A->0" ref = "bloodTypeInput">A --> 0</option>
            <option value="A->A" ref = "bloodTypeInput">A --> A</option>
            <option value="A->B" ref = "bloodTypeInput">A --> B</option>
            <option value="A->AB" ref = "bloodTypeInput">A --> AB</option>
            <option value="B->0" ref = "bloodTypeInput">B --> 0</option>
            <option value="B->A" ref = "bloodTypeInput">B --> A</option>
            <option value="B->B" ref = "bloodTypeInput">B --> B</option>
            <option value="B->AB" ref = "bloodTypeInput">B --> AB</option>
            </select>

            <select id = "disease">
            <option value ="noneSelected" ref = "diseaseInput">Select disease</option>
            <option value="autoimmune" ref = "diseaseInput">Autoimmune</option>
            <option value="non-immune" ref = "diseaseInput">Non-immune</option>
            </select>

            <select id = "organ">
            <option value ="noneSelected" ref = "organInput">Select organ</option>
            <option value="kidney" ref = "organInput">Kidney</option>
            <option value="pancreas" ref = "organInput">Pancreas</option>
            <option value="liver" ref = "organInput">Liver</option>
            <option value="islets" ref = "organInput">Islets</option>
            </select>
            
            <button onClick={this.onNextButtonClick}> Next </button>
            
            {/* this.props.patients.map((patient, i) => 
            console.log(patient)) */}

            {/* <h1> all patients </h1>
            {this.props.patients.map((patient, i) => 
            <h2>{patient.age}</h2>)} */}
            {/* <h2>{this.props.patient.bloodType}</h2>
            <h2>{this.props.patient.weight}</h2>
            <h2>{this.props.patient.gender}</h2> */}
        
{/*             <h2> Patient information registered: </h2>
            {this.props.patients.map((patient, i) => 
            <div>
            <h2> Age: {patient.age}</h2>
            <h2> Weight: {patient.weight}</h2>
            </div>
            )} */}

         
         
         </div>

    

    }

}

/* const nextIsClicked = () => {
    <h2> Patient information registered: </h2>
            {this.props.patients.map((patient, i) => 
            <div>
            <h2> Age: {patient.age}</h2>
            <h2> Weight: {patient.weight}</h2>
            </div>
            )}
} */


const mapStateToProps = (state, props) => 
     ({patients: state.patients})


const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        addPatient

    },dispatch )

export default connect( mapStateToProps, mapDispatchToProps)(Home)