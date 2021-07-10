import Header from '@components/Header'
import Head from 'next/head'
import {Education, Skills, Work, Research, Honors} from '@components/Resume'
import {IconLink} from '@components/IconLink'
import {SectionDivider} from '@components/SectionDivider'


export default function Resume() {
    return (
        <div>
            <Head>
                <title>resume - nosaka</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <div className="mt-8 xl:mt-20 mx-auto w-11/12 md:w-9/12 lg:w-9/12">
                <h1 className="text-4xl uppercase font-extrabold mx-auto w-1/2 text-center text-chestnut">Resume</h1>
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
                    <Skills skills={
                        {
                            "Programming": "Python, Java, Kotlin, JavaScript (ES6+), Rust, HTML/CSS",
                            "Frameworks": "Tensorflow, PyTorch, Scikit-learn, React, PyTest, JUnit",
                            "Software Skills": "Git, BASH, Linux, Docker, Agile/Scrum, Continuous Integration, Test Driven Development, LaTeX"
                        }
                    }/>
                </div>

                {/* Work Experience */}
                <SectionDivider svg="/svgs/briefcase.svg" title="Work Experience"/>
                <div className="lg:w-11/12 md:mx-auto">
                    <Work
                        title="Teaching Assistant"
                        employer="UNC Charlotte Department of Computer Science"
                        location="Charlotte, NC"
                        date="Jan 2019 — Present"
                        info={[
                            "Assists with Software Engineering course of over 80 students, facilitating discussions on course-related content between students.",
                            "Design demonstrative code and interactive learning elements for students to understand Software Engineering.",
                            "Led weekly lab instruction for 40 students in order to facilitate active learning for the department's CS1 course.",
                        ]}
                    />
                    <Work
                        title="Motion Graphic Designer"
                        employer="The Littlefield Company"
                        location="Charlotte, NC"
                        date="Apr 2018 — May 2020"
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
                        date="May 2020 — Aug 2020"
                        info={[
                            "Designed and developed an Android mobile application with research intent.",
                            "Implemented modern Android development practices with MVVM architecture and NoSQL databases.",
                            "Participated in weekly meetings to understand research objectives and create solutions to challenging obstacles.",
                            "Developed experience in Android, Kotlin, Firebase, and Room."
                        ]}
                    />
                    <Research
                        title="Augmented Reality and Machine Learning for Medical Use"
                        lab="Autonomous Intelligent Wireless Networked Systems Laboratory"
                        supervisor="Dr. Pu Wang"
                        location="UNC Charlotte"
                        date="Dec 2019 — May 2020"
                        info={[
                            "Designed system for use in critical professions such as the medical industry.",
                            "Utilized EPSON MOVERIO smart glasses in conjunction with Tensorflow Lite and other related technologies for user-inspired research. ",
                            "Currently working on publishing a system paper concerning the project."
                        ]}
                    />
                </div>

                <SectionDivider svg="/svgs/light-bulb.svg" title="Honors"/>
                <div className="lg:w-11/12 md:mx-auto">
                    <Honors skills={
                        {
                            "Chancellors List — UNC Charlotte": "Awarded for earning above 3.8 GPA, All semesters",
                            "Student Marshal — UNC Charlotte": "Awarded based on academic performance.",
                            "Atkins Library UG Research Award": "Awarded for contribution to field, depth/breadth of project, and use of library resources.",
                            "Phi Kappa Phi": "Honor Society, 2020 — Present"
                        }
                    }/>
                </div>

                <div className="my-64">
                </div>

            </div>
        </div>
    )
}
