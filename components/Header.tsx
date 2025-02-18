import Link from 'next/link'

const Header = () => {
    // const linkStyle = "link-animation hover:underline transition-all duration-700 hover:-translate-y-1"
    const linkStyle = "hover:underline"
    return <>
        <div className="px-10 md:mx-auto md:w-8/12 w-4/5 lg:flex lg:flex-row items-center pt-5 pb-4 lg:py-10">
            <h1 className="text-3xl font-extrabold uppercase text-left">
                <Link href="/" className="">
                    Nicholas Osaka
                </Link>
            </h1>
            <ul className="list-none mx-auto mr-0 uppercase font-bold text-xl lg:grid lg:grid-cols-2 mt-2 lg:mt-0">
                <li className="inline mr-5">
                    <Link href="/writing" className={linkStyle}>
                        writing
                    </Link>
                </li>
                <li className="inline">
                    <Link href="/" className={linkStyle}>
                        about
                    </Link>
                </li>
            </ul>
        </div>
        <hr className="mx-auto border-2 border-chestnut"></hr>
    </>;
  }
  

  export default Header
