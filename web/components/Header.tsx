import Link from 'next/link'

const Header = () => {
    return (
    <>
        <div className="mx-auto md:w-8/12 w-4/5 sm:grid sm:grid-cols-2 my-5 sm:my-10">
            <h1 className="text-4xl font-extrabold uppercase text-left">
                <Link href="/">
                <a className="link-animation">Nicholas Osaka</a>
                </Link>
            </h1>
            <ul className="list-none my-auto mx-auto uppercase font-bold text-xl mr-2 md:grid md:grid-cols-2 mt-2">
                <li className="inline">
                    <Link href="/about">
                        <a className="link-animation">About</a>
                    </Link>
                </li>
                <li className="inline px-3 md:px-0">
                    <Link href="/resume">
                        <a className="link-animation">Resume</a>
                    </Link>
                </li>
            </ul>
        </div>
        <hr className="mx-auto md:w-4/5 w-11/12 border-2 border-chestnut"></hr>
    </>
    )
  }
  

  export default Header
