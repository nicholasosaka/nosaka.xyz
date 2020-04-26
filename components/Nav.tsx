import React from 'react'
import Link from 'next/link'

function Nav(){
    return (
        <div className="subpixel-antialiased flex flex-row w-screen justify-between uppercase font-bold tracking-tighter text-right text-xl p-4">
            <div className='ml-1 h-auto w-auto text-2xl'>
                <Link href='/'>
                    <a className="transition duration-300 ease-out hover:text-green-900 hover:underline tracking-tighter">
                        nosaka.dev(eloper)
                    </a>
                </Link>
            </div>
            <ul className="flex flex-row space-x-2">
                <li>
                    <Link href='/about'>
                        <a className="transition duration-300 ease-out hover:text-green-900 hover:underline">About</a>
                    </Link>
                </li>
                <li>
                    <Link href='/writings'>
                        <a className="transition duration-300 ease-out hover:text-green-900 hover:underline">Writings</a>
                    </Link>
                </li>
                <li>
                    <Link href='/resume'>
                        <a className="transition duration-300 ease-out hover:text-green-900 hover:underline">Resume</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav