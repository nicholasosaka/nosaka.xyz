import moment from 'moment'

export default function Date(props){

    return props.bold ? (
        <span className="order-2 md:mx-auto md:mt-1 lg:mt-1.5 md:order-none text-sm font-light md:text-base md:font-bold tracking-tight">
            <p className="inline">{moment(props.date).format("MMM")}</p>
            <p className="ml-1 inline ordinal">{moment(props.date).format("Do YYYY")}</p>
        </span>
    ) : (
        <span className="order-2 md:mx-auto md:mt-1 lg:mt-1.5 md:order-none text-sm font-light md:text-base tracking-tight">
            <p className="inline">{moment(props.date).format("MMM")}</p>
            <p className="ml-1 inline ordinal">{moment(props.date).format("Do YYYY")}</p>
        </span>
    )
}