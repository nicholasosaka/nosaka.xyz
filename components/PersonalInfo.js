import React from 'react'
import RestartingTypist from './RestartingTypist'

function PersonalInfo() {
    const titles = ["developer", "software engineer", "student", "coffee fanatic"];
    return (
        <div>
            <p className="description">
                Hi, I'm
            </p>

            <h1 className="title">
                Nicholas Osaka.
            </h1>

            <span className="typing">
                <span>I'm a</span>
                <span className="changing-word">
                    <RestartingTypist style={{'color': '#FFFF00'}} words={titles} ></RestartingTypist>
                </span>
            </span>            

            <style jsx>{`

            .typing {
                font-size: 2rem;
                display: flex;
                flex-direction: row;
            }

            .changing-word {
                margin-left: 0.5rem;
            }
    
            .title {
                font-size: 4rem;
            }
    
            .title,
            .description {
                text-align: left;
                margin-top: 0rem;
                margin-bottom: 0.2rem;
            }
    
            .description {
                font-size: 2rem;
            }
            `}</style>
        </div>
    )
}

export default PersonalInfo;