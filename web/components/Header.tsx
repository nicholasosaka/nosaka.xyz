import Link from 'next/link'

const Header = () => {
    return (
    <>
        <div className="mx-auto md:w-8/12 w-4/5 sm:flex sm:flex-row items-center py-5 sm:py-10">
            <h1 className="text-3xl lg:text-4xl font-extrabold uppercase text-left">
                <Link href="/">
                <a className="link-animation">Nicholas Osaka</a>
                </Link>
            </h1>
            <ul className="list-none mx-auto mr-0 uppercase font-bold text-xl md:grid md:grid-cols-2">
                <li className="inline mr-2">
                    <Link href="/about">
                        <a className="link-animation">About</a>
                    </Link>
                </li>
            </ul>
        </div>
        <hr className="mx-auto md:w-4/5 w-11/12 border-2 border-chestnut"></hr>
    </>
    )
  }
  

  export default Header
