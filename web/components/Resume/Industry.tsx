
const Work = (props: any) => {
    // props
    //      .title
    //      .employer
    //      .location
    //      .date (range)
    //      .info (array)

    return (
        <div className="grid grid-cols-5 my-4">
        <h1 className="order-1 col-span-5 text-base md:col-span-4 md:text-xl font-bold tracking-tight">{props.title}</h1>
        <p className="order-2 col-span-2 lg:col-span-1 lg:text-right tracking-tight">{props.location}</p>
        <p className="order-4 lg:order-3 col-span-4 lg:col-span-3 text-chestnut">{props.employer}</p>
        <p className="order-3 lg:order-4 col-span-3 lg:col-span-2 font-extralight tracking-tight text-right text-jet">{props.date}</p>
        <ul className="order-5 col-span-5 pt-2 list-disc list-inside">
        {
            props.info.map(
                function(info: any, idx: number) {
                    return (
                        <li key={idx} className="font-light text-sm sm:text-base tracking-tight mt-1">
                            <p className="inline">{info}</p>
                        </li>
                    )
                }
            )
        }

        </ul>
    </div>

    )
}

export default Work