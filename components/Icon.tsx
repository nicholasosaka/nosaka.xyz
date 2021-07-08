import Image from 'next/image'

const Icon = (props: any) => {
    return (
        <div className={`${props.styling} relative`}> 
            <Image
                src={props.svg} alt={props.alt}
                layout="fill" // required
                className={props.styling}
            />
        </div>

    )
}

export {Icon}
