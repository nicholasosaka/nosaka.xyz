/* eslint-disable react/jsx-no-comment-textnodes */
import Header from '@components/Header'
import Head from 'next/head'
import Image from 'next/image';

const Vitae = () => {
    const imageStyle = "h-auto max-w-full"

    return (
        <div className="">
            <Head>
                <title>Gallery - Nicholas Osaka</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header fullhr/>
            <div className='my-8 w-11/12 mx-auto'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-16">
                    <div className="flex flex-col gap-4">
                        <Image className={imageStyle} width={4160} height={6240} src="/imgs/gallery/DSCF3944.JPG" alt=""/>
                        <img className={imageStyle} src="/imgs/gallery/DSCF5267.JPG" alt=""/>
                        <img className={imageStyle} src="/imgs/gallery/DSCF5908.JPG" alt=""/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img className={imageStyle} src="/imgs/gallery/DSCF2613.JPG" alt=""/>
                        <img className={imageStyle} src="/imgs/gallery/DSCF1741.JPG" alt=""/>
                        <img className={imageStyle} src="/imgs/gallery/DSCF2201.JPG" alt=""/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img className={imageStyle} src="/imgs/gallery/DSCF2168.JPG" alt=""/>
                        <img className={imageStyle} src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                        <img className={imageStyle} src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img className={imageStyle} src="/imgs/gallery/DSCF1884.JPG" alt=""/>
                        <img className={imageStyle} src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                        <img className={imageStyle} src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vitae