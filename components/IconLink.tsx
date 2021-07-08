import Link from 'next/link'
import {Icon} from './Icon'

const IconLink = (props: any) => {
    return (
        <div className="mx-auto">
            <Icon svg={props.svg} alt={props.alt} height={props.height} width={props.width} styling={"inline h-3"}/>
            <Link href={props.link}>
                <a className="inline font-light ml-1 hover:underline hover:text-chestnut">{props.text}</a>
            </Link>
        </div>
    )
}

export {IconLink}
