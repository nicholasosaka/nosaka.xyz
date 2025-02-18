/* eslint-disable react/jsx-no-comment-textnodes */
import Header from '@components/Header'
import Head from 'next/head'
import IconLink from '@components/IconLink'
import Link from 'next/link'
import Image from 'next/image'

const Index = () => {
    return (
        <div className="">
            <Head>
                <title>About Nicholas Osaka</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <div className='mt-8 xl:mt-20 2xl:w-10/12 xl:w-11/12 md:w-8/12 mx-auto'>
                <div className="flex flex-col xl:flex-row">
                    <div className='px-10 py-10'>
                        <h1 className="text-2xl uppercase font-extrabold text-chestnut">// about me</h1>
                        <div className="xl:flex flex-row lg:w-9/12 justify-between my-3">
                            <IconLink svg="/svgs/email.svg" alt="Email Icon" text="nosaka@charlotte.edu" link="mailto:nosaka@charlotte.edu"/>
                            <IconLink svg="/svgs/github.svg" alt="GitHub Icon" text="nicholasosaka" link="https://github.com/nicholasosaka"/>
                            <IconLink svg="/svgs/linkedin.svg" alt="LinkedIn Icon" text="nicholasosaka" link="https://linkedin.com/in/nicholasosaka/"/>
                        </div>
                        <div className="prose my-5">
                            <p>Nicholas Osaka is a writer, worker in tech, and graduate student studying philosophy at the University of North Carolina at Charlotte. They write about Asian/-American feminism, philosophy of technology (particularly artificial intelligence), and fintech. Their philosophical interests include the history of statistics and computing, cybernetics, diasporic feminist and queer theory, and critiques of neoliberalism. While their interests are always in motion, they find home in the frameworks offered through feminist, queer, and disabled philosophies and theories.</p>
                            <p>Nicholas loves coffee, cats, and film photography.</p>
                        </div>
                        <h1 className="text-lg font-bold text-chestnut uppercase">// Academic CV</h1>
                        <p className='prose'>You can find my academic CV here, as a PDF. I try to keep it as up-to-date as possible. For a look at my industry experience, please check out my LinkedIn.</p>
                        <div className="flex md:flex-row flex-col gap-y-8 gap-x-16 my-8 w-full">
                            <Link href="/cv.pdf" passHref legacyBehavior>
                                <button className="transition duration-500 bg-transparent text-chestnut hover:bg-chestnut hover:text-white font-bold py-2 px-28 rounded-sm inline-flex items-center border-2 border-chestnut mx-auto">
                                    <span className="mx-auto">View my CV</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='order-first mx-auto pb-5 px-10'>
                        <Image
                            className="rounded-2xl"
                            src="/headshot.jpg"
                            width={1418/3}
                            height={1772/3}
                            alt="Picture of Nicholas Osaka"
                            />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index