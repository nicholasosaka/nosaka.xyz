type HonorInformation = {
    title: string
    description?: string
    location: string
    date: string
}
const Honor = (props: HonorInformation) => {
    return (
        <div className="grid xl:grid-cols-9 gap-0">
            <h2 className="xl:col-span-4 text-base font-bold sm:text-xl">{props.title}</h2>
            <p className="xl:col-span-5 text-sm font-thin sm:text-base items-start lg:font-light tracking-tight lg:tracking-normal break-words">
                {props.description}
            </p>
        </div>
    )
}

export default Honor