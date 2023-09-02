import React, { useState } from 'react';
import './App.css';
import Newjob from './Newjob';
import Experience from './experience';
import Description from './description';
import Conditions from './conditions';

function App(){
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (value) => {
      setSelectedOption(value);
    };

    return (
        <div class="App">
            <Newjob
                text="Select Job Type:"
                selectedOption={selectedOption}
                onRadioChange={handleRadioChange}
            />
            {selectedOption === "freelance" && (
                <>
                <Description />
                <Conditions />
                </>
            )}
            {selectedOption === "employment" && (
                <>
                <Description />
                <Conditions />
                <Experience />
                </>
            )}

            <button type="button">Post</button>

        </div>
    );
}

export default App;