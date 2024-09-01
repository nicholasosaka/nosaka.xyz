import moment from 'moment'

const Date = (props: any) => {
    return (
        <span className="order-1 md:mx-auto md:mt-1 lg:mt-1.5 md:order-none font-light tracking-tight md:tracking-normal">
            <p className="inline">{moment(props.date).format("MMM")}</p>
            <p className="ml-1 inline ordinal">{moment(props.date).format("Do YYYY")}</p>
        </span>
    )
}

export default Date