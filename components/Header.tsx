import Link from 'next/link'

const Header = () => {
    return (
    <>
        <div className="mx-auto md:w-8/12 w-4/5 grid grid-cols-2 py-10">
            <h1 className="text-4xl font-extrabold uppercase text-left">
                <Link href="/">
                <a className="transition duration-500 hover:underline hover:text-jet">Nicholas Osaka</a>
                </Link>
            </h1>
            <ul className="list-none my-auto mx-auto uppercase font-bold text-xl mr-2 md:grid md:grid-cols-2">
                <li className="">
                    <Link href="/about">
                        <a className="transition duration-500 hover:underline hover:text-jet">About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/resume">
                        <a className="transition duration-500 hover:underline hover:text-jet">Resume</a>
                    </Link>
                </li>
            </ul>
        </div>
        <hr className="mx-auto md:w-4/5 w-11/12 border-2 border-chestnut"></hr>
    </>
    )
  }
  
  
  export default Header