
type EducationInformation = {
    institution: string
    degreeType: string
    degreeField: string
    location: string
    graduation: string
    info: string[]
}

const Education = (props: EducationInformation) => {

    return (
        <div className="grid grid-cols-5 my-4">
            <h1 className="order-1 col-span-5 text-base md:col-span-4 md:text-xl font-bold tracking-tight ">{props.institution}</h1>
            <p className="order-4 col-span-2 lg:order-2 lg:col-span-1 lg:text-right tracking-tight">{props.location}</p>
            <p className="order-2 lg:order-3 col-span-4 lg:col-span-4 text-chestnut">{props.degreeType} in {props.degreeField}</p>
            <p className="order-3 lg:order-4 col-start-5 text-right font-extralight tracking-tight text-jet">{props.graduation}</p>
            <ul className="order-5 col-span-4 pt-2">
            {
                props.info.map(
                    function(info: any, idx: number) {
                        return info.includes(":") ? (
                            <li key={idx} className="font-light text-sm sm:text-base">
                                <p className="inline font-semibold">{info.split(":")[0]}:</p>
                                <p className="inline">{info.split(":")[1]}</p>
                            </li>
                        ) : (
                            <li key={idx} className="font-light text-sm sm:text-base">
                                <p className="inline font-semibold italic">{info}</p>
                            </li>
                        )
                    }
                )
            }

            </ul>
        </div>
    )
}

export default Education