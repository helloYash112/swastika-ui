import List from "./List.jsx";
import { useReducer, useRef, useState } from "react";
import { meters } from "../assets/meter.js";
import "./powerInputForm.css";

// unified state shape
const initialState = { id: "", name: "" };

function meterReducer(state, action) {
  switch (action.type) {
    case "set-id":
      return { ...state, id: action.payload };
    case "set-name":
      return { ...state, name: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function clearKwh(kwhRef) {
  kwhRef.current.value = "";
  kwhRef.current.focus();
}

function clearPf(pfRef) {
  pfRef.current.value = "";
  pfRef.current.focus();
}

export default function PowerInputForm() {
  const [meter, dispatch] = useReducer(meterReducer, initialState);

  // keep options in state so new entries reflect immediately
  const [meterIdOptions, setMeterIdOptions] = useState(
    meters.map(m => ({ label: m.id, value: m.id }))
  );
  const [meterNameOptions, setMeterNameOptions] = useState(
    meters.map(m => ({ label: m.name, value: m.name }))
  );

  const kwhRef = useRef(null);
  const pfRef = useRef(null);

  function handleMiterId(selected) {
    if (!selected) {
      dispatch({ type: "reset" });
      return;
    }
    const match = meters.find(ele => ele.id === selected.value);
    if (match) {
      dispatch({ type: "set-id", payload: match.id });
      dispatch({ type: "set-name", payload: match.name });
    } else {
      // new ID → set ID, keep name if already typed
      dispatch({ type: "set-id", payload: selected.value });
    }
  }

  function handleMiterName(selected) {
    if (!selected) {
      dispatch({ type: "reset" });
      return;
    }
    const match = meters.find(ele => ele.name === selected.value);
    if (match) {
      dispatch({ type: "set-id", payload: match.id });
      dispatch({ type: "set-name", payload: match.name });
    } else {
      // new Name → set Name, keep ID if already typed
      dispatch({ type: "set-name", payload: selected.value });
    }
  }

  function setNewEntryID(inputValue) {
    const newEntry = { label: inputValue, value: inputValue };
    setMeterIdOptions(prev => [...prev, newEntry]);
    dispatch({ type: "set-id", payload: inputValue });
  }

  function setNewEntryName(inputValue) {
    const newEntry = { label: inputValue, value: inputValue };
    setMeterNameOptions(prev => [...prev, newEntry]);
    dispatch({ type: "set-name", payload: inputValue });
  }

  function display() {
    console.log("Meter:", meter);
   const kwh=kwhRef.current.value;
   const pf=pfRef.current.value;

    // persist new pair into meters array if both filled
    if (meter.id && meter.name) {
      meters.push({ id: meter.id, name: meter.name });
      console.log("New meter registered:", { id: meter.id, name: meter.name });
    }
    clearKwh(kwhRef);
    clearPf(pfRef);
    dispatch({type:'reset'});
    alert(`kwh : ${ kwh}, pf : ${pf} meter-name : ${meter.name}, meter-id : ${meter.id}`)
  }

  return (
    <div id="reading">
      <form id="input-form" onSubmit={e => e.preventDefault()}>
        <label htmlFor="kwh">kwh :</label>
        <input
          type="text"
          placeholder="enter a kwh value"
          id="kwh"
          ref={kwhRef}
        />

        <label htmlFor="pf">pf :</label>
        <input
          type="text"
          placeholder="enter a pf value"
          id="pf"
          ref={pfRef}
        />

        <label htmlFor="meter">Meter ID :</label>
        <List
          options={meterIdOptions}
          onChange={handleMiterId}
          createNewEntry={setNewEntryID}
          value={meter.id ? { label: meter.id, value: meter.id } : null}
          title="meterId"
        />

        <label htmlFor="name">Meter Name :</label>
        <List
          options={meterNameOptions}
          onChange={handleMiterName}
          createNewEntry={setNewEntryName}
          value={meter.name ? { label: meter.name, value: meter.name } : null}
          title="meterName"
        />

        <button id="btn" onClick={display}>
          Submit
        </button>
      </form>
    </div>
  );
}
