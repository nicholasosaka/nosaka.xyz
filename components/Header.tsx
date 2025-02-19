import Link from 'next/link'

const Header = (props: { fullhr?: boolean }) => {
    // const linkStyle = "link-animation hover:underline transition-all duration-700 hover:-translate-y-1"
    const linkStyle = "hover:underline"
    return <>
        <div className="px-10 md:mx-auto md:w-9/12 xl:w-8/12 lg:flex lg:flex-row justify-end items-center pt-5 pb-4 lg:py-10">
            <h1 className="text-2xl md:text-3xl font-extrabold uppercase text-left">
                <Link href="/" className="">
                    Nicholas Osaka
                </Link>
            </h1>
            <ul className="list-none mx-auto mr-0 uppercase font-bold text-xl lg:grid lg:grid-cols-2 mt-1 lg:mt-0">
                <li className="inline mr-5 md:text-right">
                    <Link href="/writing" className={linkStyle}>
                        writing
                    </Link>
                </li>
                <li className="inline text-right">
                    <Link href="/gallery" className={linkStyle}>
                        gallery
                    </Link>
                </li>
            </ul>
        </div>
        {
            props.fullhr ? <hr className="mx-auto border-2 border-chestnut"></hr> : <hr className="mx-auto border-2 border-chestnut md:w-2/3"></hr>
        }
        
    </>;
  }
  

  export default Header
