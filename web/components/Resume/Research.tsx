type ResearchInfo = {
    title: string
    lab: string
    supervisor: string
    location: string
    date: string
    info: string[]
}

const Research = (props: ResearchInfo) => {

    return (
        <div className="grid grid-cols-4 my-4">
        <h1 className="order-1 col-span-4 text-base lg:col-span-3 tracking-tight md:text-xl font-bold">{props.title}</h1>
        <p className="order-4 lg:order-3 col-span-4 lg:col-span-3 text-chestnut">{props.lab}</p>
        <p className="order-5 lg:order-5 col-span-4 text-chestnut">{props.supervisor}</p>
        <p className="order-2 lg:order-2 col-span-2 lg:col-span-1 tracking-tight lg:text-right">{props.location}</p>
        <p className="order-3 lg:order-4 col-span-2 lg:col-span-1 font-extralight tracking-tight text-right text-jet">{props.date}</p>
        <ul className="order-6 col-span-4 mt-3 list-disc list-inside">
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

export default Research