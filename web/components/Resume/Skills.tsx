
const Skills = (props: any) => {
    return (
        <div className="grid my-4 gap-2">
            {Object.entries(props.skills).map(
                function(ditem: any, idx: number) {
                    return (
                        <div className="grid lg:grid-cols-12 gap-0" key={idx}>
                            <h2 className="lg:col-span-3 text-base font-bold sm:text-xl">{ditem[0]}</h2>
                            <p className="lg:col-start-5 lg:col-end-13 text-sm font-thin sm:text-base lg:font-light tracking-tight lg:tracking-normal break-words">
                                {ditem[1]}
                            </p>
                        </div>
                    )
                }
            )}
        </div>
    )
}

export default Skills