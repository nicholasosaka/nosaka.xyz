
const Education = (props) => {
    // props
    //      .institution
    //      .degreeType
    //      .degreeField
    //      .location
    //      .graduation
    //      .info (array)

    return (
        <div className="grid grid-cols-5 my-4">
            <h1 className="order-1 col-span-5 text-base sm:col-span-4 sm:text-xl font-bold">{props.institution}</h1>
            <p className="order-2 col-span-2 text-sm sm:text-base sm:col-span-1 sm:text-right sm:mx-5">{props.location}</p>
            <p className="order-4 sm:order-3 col-span-4 text-chestnut">{props.degreeType} in {props.degreeField}</p>
            <p className="order-3 sm:order-4 col-start-5 text-sm sm:text-base sm:text-right sm:mx-5 font-extralight text-jet">{props.graduation}</p>
            <ul className="order-5 col-span-4 pt-1.5">
            {
                props.info.map(
                    function(info, idx) {
                        return (
                            <li key={idx} className="font-light text-sm">
                                <p className="inline font-semibold">{info.split(":")[0]}:</p>
                                <p className="inline">{info.split(":")[1]}</p>
                            </li>
                        )
                    }
                )
            }

            </ul>
        </div>
    )
}

const Skills = (props) => {

    return (
        <div className="grid grid-cols-6 my-4 gap-1">
            {Object.entries(props.skills).map(
                function(ditem, idx) {
                    return (
                        <>
                            <h2 className="text-xl font-bold col-span-6 sm:col-span-2">{ditem[0]}</h2>
                            <ul className="col-span-6 sm:col-span-4 font-light">
                                {ditem[1].map(
                                    function(skill, idx) {
                                        console.log(idx, ditem[1])
                                        return idx == (ditem[1].length - 1) ? (
                                            <li id={idx} className="inline mr-0.5">{skill}</li>
                                        ) : (
                                            <li id={idx} className="inline mr-0.5">{skill},</li>
                                        )
                                    }
                                )}
                            </ul>
                        </>
                    )
                }
            )}
        </div>
    )
}

export {Education, Skills}