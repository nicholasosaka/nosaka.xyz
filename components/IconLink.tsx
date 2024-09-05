import Link from 'next/link'
import {Icon} from './Icon'

const IconLink = (props: any) => {
    return (
        <div>
            <Icon svg={props.svg} styling={"inline h-3"}/>
            <Link href={props.link} className="inline font-light ml-1 hover:underline hover:text-chestnut">
                {props.text}
            </Link>
        </div>
    );
}

export default IconLink
