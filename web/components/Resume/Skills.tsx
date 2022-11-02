type SkillInformation = {
    entries: {
        category: string
        skills: string[]
    }[]
}

const Skills = (props: SkillInformation) => {
    return (
        <div className="grid my-4 gap-2">
            {props.entries.map(entry => 
                <div className="grid lg:grid-cols-12 gap-0">
                    <h2 className="lg:col-span-3 text-base font-bold sm:text-xl">{entry.category}</h2>
                    <p className="lg:col-start-4 lg:col-end-13 text-sm font-thin sm:text-base lg:font-light tracking-tight lg:tracking-normal break-words">{entry.skills.join(", ")}</p>
                </div>
            )}
        </div>
    )
}

export default Skills