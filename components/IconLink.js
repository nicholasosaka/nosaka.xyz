import Link from 'next/link'
import {Icon} from './Icon'

const IconLink = (props) => {
    return (
        <div className="mx-auto">
            <Icon svg={props.svg} styling={"inline h-3"}/>
            <Link href={props.link}>
                <a className="inline font-light ml-1 hover:underline">{props.text}</a>
            </Link>
        </div>
    )
}

export {IconLink}