import React from 'react'
import Link from 'next/Link'

function Nav(){
    return (
        <div className="subpixel-antialiased flex flex-row w-screen justify-between uppercase font-bold tracking-tighter text-right text-xl p-2">
            <div className='h-auto w-auto text-2xl'>
                <Link href='/'>
                    <a className="transition duration-300 ease-out hover:text-green-900 hover:underline tracking-tighter">
                        nosaka.dev(eloper)
                    </a>
                </Link>
            </div>
            <ul>
                <li>
                    <Link href='about'>
                        <a className="transition duration-300 ease-out hover:text-green-900 hover:underline">About</a>
                    </Link>
                </li>
                <li>
                    <Link href='blog'>
                        <a className="transition duration-300 ease-out hover:text-green-900 hover:underline">Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href='resume'>
                        <a className="transition duration-300 ease-out hover:text-green-900 hover:underline">Resume</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav