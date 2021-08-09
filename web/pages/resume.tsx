import Header from '@components/Header'
import Head from 'next/head'
import Link from 'next/link'

import IconLink from '@components/IconLink'
import SectionDivider from '@components/SectionDivider'

import Education from '@components/Resume/Education'
import Skills from '@components/Resume/Skills'
import Industry from '@components/Resume/Industry'
import Research from '@components/Resume/Research'
import Honor from '@components/Resume/Honor'


export default function Resume() {
    return (
        <div>
            <Head>
                <title>resume - nosaka</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <div className="mt-8 xl:mt-20 mx-auto w-11/12 md:w-9/12 lg:w-9/12">
                <div className="transition transform duration-500 hover:scale-110 text-center my-8">
                    <Link href="/resume.pdf" passHref>
                        <button className="bg-transparent text-chestnut font-bold py-2 px-4 inline-flex items-center">
                            <svg className="fill-current w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <h1 className="text-4xl uppercase font-extrabold mx-auto text-center">Resume</h1>
                        </button>
                    </Link>
                </div>

                <div className="flex flex-row mx-auto sm:w-8/12 lg:w-6/12 justify-between my-3">
                    <IconLink svg="/svgs/github.svg" alt="GitHub Icon" text="nosaka0" link="https://github.com/nosaka0"/>
                    <IconLink svg="/svgs/email.svg" alt="Email Icon" text="nosaka@uncc.edu" link="mailto:nosaka@uncc.edu"/>
                    <IconLink svg="/svgs/linkedin.svg" alt="LinkedIn Icon" text="nosaka0" link="https://www.linkedin.com/in/nosaka0"/>
                </div>

                {/* Education */}
                <SectionDivider svg="/svgs/academic-cap.svg" title="Education"/>
                <div className="lg:w-11/12 md:mx-auto">
                    <Education 
                        institution="University of North Carolina at Charlotte"
                        degreeField="Computer Science"
                        degreeType="Bachelor of Science"
                        location="Charlotte, NC"
                        graduation="May 2022"
                        info={["GPA: 4.0", "Concentration: Artificial Intelligence", "Minor: Mathematics"]}
                    />
                    <Education 
                        institution="University of North Carolina at Charlotte"
                        degreeField="Philosophy"
                        degreeType="Bachelor of Arts"
                        location="Charlotte, NC"
                        graduation="May 2022"
                        info={["GPA: 4.0", "Areas of interest: Aesthetics, Critical Theory, Political Philosophy, Ethical Theory, Existentialism"]}
                    />
                </div>

                {/* Skills */}
                <SectionDivider svg="/svgs/chip.svg" title="Skills"/>
                <div className="lg:w-11/12 md:mx-auto">
                    <Skills entries={[
                        {
                            category: "Programming",
                            skills: ["Python", "Java", "Kotlin", "JavaScript", "Rust", "HTML/CSS"]
                        },
                        {
                            category: "Frameworks",
                            skills: ["Tensorflow", "PyTorch", "Scikit-learn", "React", "PyTest", "JUnit"]
                        },
                        {
                            category: "Software Skills",
                            skills: ["Git", "BASH", "Linux", "Docker", "Agile/Scrum", "Continuous Integration", "Test Driven Development", "LaTeX"]
                        }
                    ]
                    }/>
                </div>

                {/* Work Experience */}
                <SectionDivider svg="/svgs/briefcase.svg" title="Work Experience"/>
                <div className="lg:w-11/12 md:mx-auto">
                    <Industry
                        title="Technology & Data Intern — Leadership Development Program"
                        employer="The Hartford"
                        location="Hartford, CT"
                        date="May 2021 — August 2021"
                        info={[
                            "Interned remotely in the Leadership Development Program Ops, Tech, Data & Analytics track.",
                            "Built a portfolio management intake tool for the Enterprise Data Office estimated to save over $30k a year with three other interns.",
                            "Led multiple meetings with different teams in order to identify best approach for architecture, deployment, and access control.",
                            "Developed teamworking and leadership skills while working in a remote environment.",
                            "Application included Node.js front and back ends, with an Express.js RESTful API layer which manages data exchange to database.",
                            "Analytics were integrated using Tableau for a Director to identify blockers and advance business initiatives"
                        ]}
                    />
                    <Industry
                        title="Teaching Assistant"
                        employer="UNC Charlotte Department of Computer Science"
                        location="Charlotte, NC"
                        date="Jan 2019 — Present"
                        info={[
                            "Assists with Software Engineering course of over 80 students, facilitating discussions on course-related content between students.",
                            "Designs demonstrative code and interactive learning elements for students to understand Software Engineering.",
                            "Led weekly lab instruction for 40 students in order to facilitate active learning for CS1 course.",
                        ]}
                    />
                    <Industry
                        title="Motion Graphic Designer"
                        employer="The Littlefield Company"
                        location="Charlotte, NC"
                        date="April 2018 — May 2020"
                        info={[
                            "Designed motion graphic content for projects requiring displays of complex data.",
                            "Translated clients quantitative needs into creative goals for projects.",
                            "Interacted with clients to deliver final design under anticipated deadlines.",
                            "Designed project asset organizational scheme for use in all company projects with motions graphics."
                        ]}
                    />

                </div>

                {/* Research */}
                <SectionDivider svg="/svgs/beaker.svg" title="Research"/>
                <div className="lg:w-11/12 md:mx-auto">
                    <Research
                        title="NSF REU Research Project — Community Oversight for Privacy and Security"
                        lab="CO-oPS Project (Multiple Institutions)"
                        supervisor="Dr. Heather Lipford"
                        location="UNC Charlotte"
                        date="May 2020 — August 2020"
                        info={[
                            "Designed and developed an Android mobile application with research intent.",
                            "Implemented modern Android development practices with MVVM architecture and NoSQL databases.",
                            "Participated in weekly meetings to discuss research objectives and create solutions to challenging obstacles.",
                            "Developed experience in Android, Kotlin, Firebase, and Room."
                        ]}
                    />
                    <Research
                        title="Augmented Reality and Machine Learning for Medical Use"
                        lab="Autonomous Intelligent Wireless Networked Systems Laboratory"
                        supervisor="Dr. Pu Wang"
                        location="UNC Charlotte"
                        date="December 2019 — May 2020"
                        info={[
                            "Designed system for use in critical professions such as the medical industry.",
                            "Utilized EPSON MOVERIO smart glasses in conjunction with Tensorflow Lite and other related technologies for user-inspired research in possible solutions for cognitive overload in error-critical professions."
                        ]}
                    />
                </div>

                <SectionDivider svg="/svgs/light-bulb.svg" title="Honors and Activities"/>
                <div className="lg:w-11/12 md:mx-auto">
                    <Honor
                        title="Chancellors List"
                        description="Awarded for earning above 3.8 GPA, All semesters"
                        location="UNC Charlotte"
                        date="2018 — 2021"
                    />
                    <Honor
                        title="Student Marshal"
                        description="Awarded based on academic performance"
                        location="UNC Charlotte"
                        date="2019"
                    />
                    <Honor
                        title="Atkins Library Undergraduate Research Award"
                        description="Awarded for contribution to field, depth/breadth of project, and use of library resources."
                        location="UNC Charlotte"
                        date="2020"
                    />
                    <Honor
                        title="Phi Kappa Phi"
                        description="Honor society member"
                        location="UNC Charlotte"
                        date="2019 — 2021"
                    />
                </div>

                <div className="my-32">
                    <h1 className="text-center text-3xl font-bold text-chestnut mb-8">Looking for more?</h1>
                    <div className="flex flex-row justify-center gap-x-16">
                        <Link href="/cv.pdf" passHref>
                            <button className="transition duration-500 bg-transparent text-chestnut hover:bg-chestnut hover:text-white font-bold py-2 px-4 rounded inline-flex items-center border-2 border-chestnut">
                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                <span className="">View my CV</span>
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
