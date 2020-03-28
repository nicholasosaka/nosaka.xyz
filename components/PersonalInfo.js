import React from 'react'
import RestartingTypist from './RestartingTypist'

function PersonalInfo() {
    const titles = ["developer", "software engineer", "student", "coffee fanatic"];
    return (
        <span className="inline-block">
            <p className="text-3xl font-thin -mb-">
                Hi, I'm
            </p>

            <h1 className="text-5xl font-extrabold">
                Nicholas Osaka.
            </h1>

            <div className="text-3xl flex flex-row font-thin">
                <span>I'm a</span>
                <span className="ml-1">
                    <RestartingTypist style={{'color': '#FFFF00'}} words={titles} ></RestartingTypist>
                </span>
            </div>            
        </span>
    )
}

export default PersonalInfo;