import List from "./List.jsx";
import { useReducer,useRef } from "react";
import { meters } from "../assets/meter.js";

const intialState = { label: '', value: '' };



function meterIdReducer(state,action){

    switch(action.type){
        case 'udt-id':{
            return{
                ...state,
                label:action.payLoad.label,
                value:action.payLoad.value

            }

        }
        case 'reset':
            {
            return intialState
        }
        default :{
            return state;

        }


    }

}
function meterNameReducer(state,action){

    switch(action.type){
        case 'udt-name':{
            return{
                ...state,
                label:action.payLoad.label,
                value:action.payLoad.value

            }

        }
        case 'reset':
            {
            return intialState
        }
        default :{
            return state;

        }


    }

}

export default function PowerInputForm() {
    const [mName, setMeterName] = useReducer(meterNameReducer, intialState);
     const [mId, setMeterId] = useReducer(meterIdReducer, intialState);
     const kwhRef=useRef(null);
       const pfRef=useRef(null);

    const meterName=[];
    const meterId=[];
    meters.forEach(ele=>{
        const obj={label :ele.name,value:ele.name};
        meterName.push(obj);
    })

    meters.forEach(ele=>{
        const obj={label :ele.id,value:ele.id};
        meterId.push(obj);
    })
    console.log(meterId);

     
    function handleMiterId(selectedId) {
    if (selectedId) {
        const match = meters.find(ele => ele.id === selectedId.label);
        if (match) {
           
            setMeterId({
                type: 'udt-id',
                payLoad: { label: match.id, value: match.id }
            });
            setMeterName({
                type: 'udt-name',
                payLoad: { label: match.name, value: match.name }
            });
        }
    }
}

function handleMiterName(selectedName) {
    const match = meters.find(ele => ele.name === selectedName.label);
    if (match) {
       
        setMeterName({
            type: 'udt-name',
            payLoad: { label: match.name, value: match.name }
        });
        setMeterId({
            type: 'udt-id',
            payLoad: { label: match.id, value: match.id }
        });
    } else {
       
        setMeterName({
            type: 'udt-name',
            payLoad: { label: selectedName.value, value: selectedName.value }
        });
    }
}
function display(){
    const{label,value}=mName;
    const{label:miterId,value:miterVal}=mId;
    
    
    const kwh=kwhRef.current.value;
    const pf=pfRef.current.value;
    console.log(kwh);
    alert(`kwh : ${kwh} pf : ${pf} miter-name is :${label}, miter-id :${miterId} `)
}

    return (
        <form id="input-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="kwh">kwh :</label>
            <input type='text' placeholder='enter a kwh value' id='kwh' ref={kwhRef}/>

            <label htmlFor="pf">pf :</label>
            <input type='text' placeholder='enter a pf value' id='pf' ref={pfRef}/>
            <label htmlFor="meter">Miter-Id</label>
           <List options={meterId} onChange={handleMiterId} value={mId}  />

            <label htmlFor="name">meter name :</label>
           <List 
              options={meterName} 
              onChange={handleMiterName} 
              value={mName}            
              title='name' 
           />
            <button id="btn" onClick={display}>Submit</button>
        </form>
    );
}