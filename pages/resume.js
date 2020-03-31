import Head from 'next/head'
import Nav from '../components/Nav'
import { IoMdMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";


const DownloadPDF = () => {
    return (
        <a href="/static/resume.pdf" className="p-3 flex flex-row mx-auto justify-center items-center">
            <p className="text-2xl font-extrabold px-1 text-white">Download PDF</p>
        </a>
    )
}

const Email = () => {
    return (
        <a href="mailto:nosaka@uncc.edu" className="flex flex-row mx-auto justify-center items-center">
            <IoMdMail/>
            <p className="text-sm font-thin px-1">nosaka@uncc.edu</p>
        </a>
    )
}

const Github = () => {
    return (
        <a href="https://github.com/nosaka0" className="flex flex-row mx-auto justify-center items-center">
            <IoLogoGithub/>
            <p className="text-sm font-thin px-1">nosaka0</p>
        </a>
    )
}

const LinkedIn = () => {
    return (
        <a href="https://linkedin.com/in/nosaka0" className="flex flex-row mx-auto justify-center items-center">
            <IoLogoLinkedin/>
            <p className="text-sm font-thin px-1">nosaka0</p>
        </a>
    )
}

const Resume = () => (
  <div>
    <Head>
      <title>nosaka - resume</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="w-screen h-screen">
        <div className="mx-auto mt-1 absolute top-0">
            <Nav/>
        </div>
        <div className="mt-4 w-screen mx-auto pt-24 sm:pt-8 pb-4 sm:pb-8">
            <h1 className="text-3xl font-extrabold text-center">Nicholas Osaka</h1>
            <div className="w-1/3 mx-auto flex flex-col sm:flex-row justify-evenly">
                <Email/>
                <Github/>
                <LinkedIn/>
            </div>
        </div>

      {/* 
      DEBUG HIGHLIGHTING:
      bg-teal-100 xs:bg-orange-800 sm:bg-red-100 md:bg-blue-100 lg:bg-yellow-300 xl:bg-purple-400 
      */}

        <div className="mx-auto w-6/7 sm:w-3/4"> {/* Resume content begins here */}

            <div className="w-4/5 mx-auto pb-3"> {/* EDUCATION */}
                <h1 className="text-center sm:text-left font-bold text-2xl px-3 tracking-tight">Education</h1>
                <hr className="border-green-900 border-t-2"/>

                <div className="sm:flex sm:flex-row justify-between"> {/* FLEX for 2 cols */}

                    <div className="text-left p-2">
                        <h1 className="text-sm md:text-base text-gray-900 font-semibold leading-tight tracking-tight">University of North Carolina at Charlotte</h1>
                        <ul>
                            <li className="text-sm font-thin tracking-tight -mb-1">Bachelor of Science in Computer Science</li>
                            <li className="text-sm font-thin tracking-tight">Bachelor of Art in Philosophy</li>

                            <li className="text-xs font-thin tracking-tight mt-1">Cumulative GPA: 4.0</li>
                            <li className="text-xs font-thin tracking-tight -mt-1">Concentrating in Artificial Intelligence</li>
                        </ul>
                    </div>
                
                    <div className="text-right hidden md:block p-2"> 
                        <h1 className="text-sm font-hairline italic leading-tight text-green-900">Charlotte, NC</h1>
                        <ul>
                            <li className="text-sm font-hairline italic tracking-tight -mb-1">Graduation: May 2021</li>
                            <li className="text-sm font-hairline italic tracking-tight">Graduation: May 2021</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="w-4/5 mx-auto py-3"> {/* SKILLS */}
                <h1 className="text-center sm:text-left font-bold text-2xl px-3 tracking-tight">Skills</h1>
                <hr className="border-green-900 border-t-2 mb-1"/>

                <div className="flex flex-row flex-wrap justify-start p-2"> {/* GRID for 2 cols */}

                    <p className="text-right flex-shrink-0 text-sm font-semibold tracking-tight pr-8">Programming Languages</p>
                    <p className="self-start sm:flex-shrink text-left text-sm font-thin tracking-tight">
                        Java, C++, Python, JavaScript, Rust, Kotlin, HTML/CSS, LaTeX
                    </p>

                    <div className="break my-1"></div>
                    
                    <p className="text-right flex-shrink-0 text-sm font-semibold tracking-tight pr-8">Software Tools and Skills</p>
                    <p className="self-start sm:flex-1 text-left text-sm font-thin tracking-tight">
                        Git, BASH, Vim, Linux, JUnit, Docker, Agile/Scrum, Continuous Integration / Development (CI/CD), REST API, Test Driven Development, Unit Testing, Object Oriented Programming
                    </p>
                    
                </div>
            </div>

            <div className="w-4/5 mx-auto py-3"> {/* Experience */}
                <h1 className="text-center sm:text-left font-bold text-2xl px-3 tracking-tight">Experience</h1>
                <hr className="border-green-900 border-t-2"/>

                <div className="text-left p-2">
                    <h1 className="text-sm md:text-base  text-gray-900 font-semibold leading-tight tracking-tight">Teaching Assistant</h1>
                    <ul>
                        <li className="text-sm font-thin tracking-tight mb-1">UNC Charlotte Department of Computer Science</li>
                        <ul className="text-sm font-thin">
                            <li>Leading weekly lab instruction for 40 students in order to facilitate active learning.</li>
                            <li>Conducting weekly one-on-on etutoring sessions with students in order to provide an excellent learning environment.</li>
                            <li>Assisting with lecture of over 100 students, supervising and encouraging discussions on course-related content between students.</li>
                            <li>Designing demonstrative code and interactive learning elements for students to understand object-oriented programming.</li>
                        </ul>
                    </ul>
                </div>
                <div className="text-left p-2">
                    <h1 className="text-sm md:text-base  text-gray-900 font-semibold leading-tight tracking-tight">Motion Graphic Designer</h1>
                    <ul>
                        <li className="text-sm font-thin tracking-tight mb-1">The Littlefield Company</li>
                        <ul className="text-sm font-thin">
                            <li>Designing motion graphic content for projects requiring displays of complex data.</li>
                            <li>Translating clients quantitative needs into creative goals for projects.</li>
                            <li>Interacts with clients to deliver final design under anticipated deadlines.</li>
                            <li>Designing project asset organizational scheme for use in all company projects with motion graphics.</li>
                        </ul>
                    </ul>
                </div>               
            </div>

        </div>

        <div className="pb-32"/>

        <div className="bg-green-900 fixed bottom-0 w-screen">
            <DownloadPDF/>
        </div>
    </main>
  </div>
)

export default Resume