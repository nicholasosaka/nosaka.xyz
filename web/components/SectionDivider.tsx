import {Icon} from './Icon'

const SectionDivider = (props: any) => {
    return (
        <div className="mt-10 border-b-4 border-chestnut">
            <h1 className="inline text-3xl font-bold text-chestnut -ml-0.5">{props.title}</h1>
            <Icon svg={props.svg} styling={"inline h-10 -mt-3 ml-1"}/>
        </div>
    )
}

export {SectionDivider}
