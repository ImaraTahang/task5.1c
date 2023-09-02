import React from 'react';
import './conditions.css';

const Conditions = ()=>{
    return <div>
        <p class="p1">
            <b>Project Conditions</b>
        </p>
        <label for="project">Project length</label>
        <input type="text" class="project" /><br></br>
        <br></br>
        <label>Payment</label>
        <label class="pay">Min</label>
        <input type="text" class="pay" />
        <label class="pay">Max</label>
        <input type="text" class="pay" /><br></br>
        <br></br>
        <label for="hours">Working hours</label>
        <input type="text" class="hours" /><br></br>

    </div>
}

export default Conditions;