import Header from '../components/Header'
import Head from 'next/head'
import Link from 'next/link'
import {Education} from '../components/Resume'
import {IconLink} from '../components/IconLink'
import {SectionDivider} from '../components/SectionDivider'

export default function Resume() {
    return (
        <div>
            <Head>
                <title>resume - nosaka</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
            <div className="mt-8 xl:mt-20 mx-auto w-11/12 md:w-9/12 lg:w-8/12">
                <h1 className="text-4xl uppercase font-extrabold mx-auto w-1/2 text-center text-chestnut">Resume</h1>
                <div className="flex flex-row mx-auto sm:w-8/12 lg:w-6/12 justify-between my-3">
                    <IconLink svg="/svgs/github.svg" text="nosaka0" link="https://github.com/nosaka0"/>
                    <IconLink svg="/svgs/email.svg" text="nosaka@uncc.edu" link="mailto:nosaka@uncc.edu"/>
                    <IconLink svg="/svgs/linkedin.svg" text="nosaka0" link="https://www.linkedin.com/in/nosaka0"/>
                </div>

                {/* Education */}
                <SectionDivider svg="/svgs/academic-cap.svg" title="Education"/>
                <div className="md:w-11/12 md:mx-auto">
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
                        info={["GPA: 4.0", "Areas of interest: Ethical Theory, Aesthetics, Critical Theory"]}
                    />

                </div>

                {/* Skills */}
                <SectionDivider svg="/svgs/chip.svg" title="Skills"/>
            </div>
        </div>
    )
}