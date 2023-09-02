import React from 'react';
import './Newjob.css';

const Newjob = (props)=>{
    return <div>
        <p class="p1">
            <b>New Job</b>
        </p>
        <p>
            {props.text}
        <input 
        type="radio" 
        id="freelance" 
        value="freelance" 
        checked={props.selectedOption==="freelance"}
        onChange={() => props.onRadioChange("freelance")}  
        />
        <label for="freelance">Freelance</label>

        <input 
        type="radio" 
        id="employment" 
        value="employment"
        checked={props.selectedOption==="employment"}
        onChange={() => props.onRadioChange("employment")}  
        />
        <label for="employment">Employment</label>
        </p>
    </div>
}

export default Newjob;