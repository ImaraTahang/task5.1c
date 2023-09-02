import React from 'react';
import './description.css';

const Description = ()=>{
    return <div>
        <p class="p1">
            <b>Describe your job</b>
        </p>
        <label for="title">Title/Position</label>
        <input type="text" class="title" /><br></br>
        <br></br>
        <label for="desc">Job description</label>
        <textarea id="desc" rows="4" cols="73" /><br></br>
        <br></br>
        <label for="skills">Skills</label>
        <input type="text" class="skills" placeholder="Please add skills that your job is required e.g. , Java"/><br></br>

        <p>Developers will find your job based on the skills you added here.</p>
    </div>
}

export default Description;