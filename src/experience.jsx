import React from 'react';
import './experience.css';

const Experience = ()=>{
    return <div>
        <p class="p1">
            <b>Experience</b>
        </p>

        <label>Experienced in</label>
        <input type="text" class="expbox" />

        <label>For at least</label>
        <input type="text" class="expbox" />
    </div>
}

export default Experience;