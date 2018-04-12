export default (state = [...defaultPatients], action) => {
    switch (action.type){
        case 'SET_PATIENT':
            return action.patients
        case 'ADD_PATIENT':
            return [...state, action.patient]
        default: 
            return state
    }
}

/* const defaultPatients =  [{
    name: "Walid",
    age: 23,
    gender: "Male",
    bloodType: "A",
    height: 182,
    weight: 73
},
{
    name: "Odin",
    age: 24,
    gender: "Male",
    bloodType: "A",
    height: 182,
    weight: 73
},        
]
 */


 const defaultPatients = [

    { }
 ]

