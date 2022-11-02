import { Icon } from "@components/Icon"
import Link from "next/link"

type CertificateInformation = {
    institution: string
    title: string
    issued: string
    expiry?: string
    url: string
    _id?: string
}

const Certificate = (props: CertificateInformation) => {

    return (
        <div className="my-4">
            <div className="grid grid-cols-5">
                <a className="flex items-center order-1 col-span-5 md:col-span-4" target="_blank" href={props.url} rel="noopener noreferrer">
                    <h1 className="text-base  md:text-xl font-bold tracking-tight">{props.title}</h1>
                    <Icon svg="/svgs/arrow-link-away.svg" styling={"inline h-5 pl-2"}/>
                </a>
                <p className="order-4 col-span-2 lg:order-2 lg:col-span-1 lg:text-right tracking-tight">{props.issued}</p>
                <p className="order-2 lg:order-3 col-span-3 lg:col-span-3 text-chestnut">{props.institution}</p>
                {props._id ? <p className="order-3 lg:order-4 col-start-4 col-span-2 text-right font-extralight tracking-tight text-jet">Credential ID {props._id}</p> : <p className="order-3 lg:order-4 col-start-4 col-span-2 text-right font-extralight tracking-tight text-jet"></p>}
            </div>
        </div>
    )
}

export default Certificate