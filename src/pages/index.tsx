import Head from 'next/head'
import {Inter} from '@next/font/google'
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillMail, AiFillGoogleCircle} from "react-icons/ai"

import Image from 'next/image'
import avatar_myself from '/public/img/avatar_myself_400.png'
import design from '/public/img/design.png'
import code from '/public/img/code.png'
import consulting from '/public/img/consulting.png'
import web1 from '/public/img/web1.png'
import web2 from '/public/img/web2.png'
import web3 from '/public/img/web3.png'
import web4 from '/public/img/web4.png'
import web5 from '/public/img/web5.png'

import {useState} from "react";


const inter = Inter({subsets: ['latin']})

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <>
            <div className={darkMode ? 'dark' : ''}>
                <Head>
                    <title>Magno Kelly Portfolio</title>
                    <meta name="description" content="Porfolio do Magno Kelly"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/img/logo_portfolio.png"/>
                </Head>
                <main className={'bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'}>
                    <section className={'min-h-screen'}>
                        <nav className={'py-10 mb-12 flex justify-between dark:text-white'}>
                            <h1 className={'text-xl font-burtons'}>My Porfolio</h1>
                            <ul className={'flex items-center'}>
                                <li>
                                    <BsFillMoonStarsFill className={'cursor-pointer text-2xl'}
                                                         onClick={() => setDarkMode(!darkMode)}
                                    />

                                </li>
                                <li>
                                    <a className={'bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'}
                                       href="#">Resume</a>
                                </li>
                            </ul>
                        </nav>
                        <div className={'text-center p-10 py-10'}>
                            <h2 className={'text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'}>Magno
                                Kelly</h2>
                            <h3 className={'text-2xl py-2 dark:text-white md:text-3xl'}>Software Engineer | Front-End
                                React
                                Heated | Back-End PhP(Laravel) Enthusiastic </h3>
                            <p className={'text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl'}>
                                Freelancer technology passionate based in Rio de Janeiro - Brazil, committed to working
                                with
                                you every step of the way to ensure your success. Join me down below to see my work.
                            </p>

                            <div
                                className={'text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'}>
                                <a
                                    href="https://twitter.com/magnokf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillTwitterCircle/>
                                </a>
                                <a
                                    href="https://github.com/magnokf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub/>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/magno-kelly-felipe-76778a233/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillLinkedin/>
                                </a>
                            </div>
                            <div
                                className={'text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'}>
                                {/*mail to*/}
                                <a
                                    href="mailto:mkfelipe.rj@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillMail/>
                                </a>


                            </div>
                            <div
                                className={'relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 mt-50 overflow-hidden mt-20 md:h-60 md:w-60'}>
                                <Image src={avatar_myself} alt={'myself 3d'} fill={true}/>
                            </div>
                        </div>
                    </section>
                    {/*    section 2*/}
                    <section>
                        <div>
                            <h3 className={'text-3xl py-1 dark:text-white'}>Services I offer</h3>
                            <p className={'text-md py-2 leading-8 text-gray-800 dark:text-gray-200'}>
                                Since I started my career as a freelancer, I have been working with a
                                <span className={'text-teal-500'}> wide range of technologies and tools</span>. I have
                                worked
                                with
                                <span className={'text-teal-500'}> many types of projects</span>, from small to large
                                scale.
                            </p>
                            <p className={'text-md py-2 leading-8 text-gray-800 dark:text-gray-200'}>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Whether it's selecting the right technologies, identifying potential roadblocks, or
                                brainstorming <span className={'text-teal-500'}> creative solutions</span>, I approach
                                every
                                project with a consultative mindset. My goal is to not only deliver <span
                                className={'text-teal-500'}>high-quality software</span>, but also to build long-term
                                partnerships with my clients by providing them with <span className={'text-teal-500'}>exceptional value and outstanding service</span>.
                            </p>
                        </div>
                        <div className={'lg:flex gap-10'}>
                            <div className={'text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'}>
                                <Image src={design} alt={'design'} width={100} height={100}/>
                                <h3 className={'text-lg font-medium pt-8 pb-2'}>Beautiful Designs</h3>
                                <p className={'py-2'}>
                                    Creating a beautiful design is one of the most important steps in the development
                                    process. I work closely with my clients to create a design that is both beautiful
                                    and
                                    functional.
                                </p>
                                <h4 className={'py-4 text-teal-600'}>Design tools I use</h4>
                                <p className={'text-gray-800 py-1'}>Photoshop</p>
                                <p className={'text-gray-800 py-1'}>Figma</p>
                                <p className={'text-gray-800 py-1'}>Canva</p>
                            </div>
                            <div className={'text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'}>
                                <Image src={code} alt={'design'} width={100} height={100}/>
                                <h3 className={'text-lg font-medium pt-8 pb-2'}>Strong technical skills</h3>
                                <p className={'py-2'}>
                                    Reliable understanding of programming concepts, algorithms, data structures, and
                                    software development principles. They should be skilled in multiple programming
                                    languages and frameworks, and be able to write high-quality, efficient, and
                                    maintainable code.
                                </p>
                                <h4 className={'py-4 text-teal-600'}>About me</h4>
                                <p className={'text-gray-800 py-1'}>Depth of knowledge</p>
                                <p className={'text-gray-800 py-1'}>Adaptability</p>
                                <p className={'text-gray-800 py-1'}>Creativity</p>
                            </div>
                            <div className={'text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'}>
                                <Image src={consulting} alt={'design'} width={100} height={100}/>
                                <h3 className={'text-lg font-medium pt-8 pb-2'}>Good communication skills</h3>
                                <p className={'py-2'}>
                                    Team effort, and a reliable software engineer should be able to communicate
                                    effectively with other team members, including other developers, project managers,
                                    and stakeholders. They should be able to clearly explain technical concepts and
                                    requirements, and be willing to collaborate and work together to find the best
                                    solutions to problems.
                                </p>
                                <h4 className={'py-4 text-teal-600'}>About me</h4>
                                <p className={'text-gray-800 py-1'}>Clarity</p>
                                <p className={'text-gray-800 py-1'}>Active listening</p>
                                <p className={'text-gray-800 py-1'}>Empathy</p>
                            </div>
                        </div>
                    </section>
                    {/*    section 3*/}
                    <section className="py-10">
                        <div>
                            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
                            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                                Since the beginning of my journey as a freelance designer and
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                developer, I've done remote work for
                                <span className="text-teal-500"> agencies </span>
                                consulted for <span className="text-teal-500">startups </span>
                                and collaborated with talanted people to create digital products
                                for both business and consumer use.
                            </p>
                            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                                I offer from a wide range of services, including brand design,
                                programming and teaching.
                            </p>
                        </div>
                        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                            <div className="basis-1/3 flex-1">
                                <Image
                                    className="rounded-lg object-cover"

                                    src={web1}
                                    alt={'web1'}
                                />
                            </div>
                            <div className="basis-1/3 flex-1">
                                <Image
                                    className="rounded-lg object-cover"

                                    src={web2}
                                    alt={'web2'}
                                />
                            </div>
                            <div className="basis-1/3 flex-1">
                                <Image
                                    className="rounded-lg object-cover"

                                    src={web5}
                                    alt={'web3'}
                                />
                            </div>
                            <div className="basis-1/3 flex-1">
                                <Image
                                    className="rounded-lg object-cover"

                                    src={web5}
                                    alt={'web4'}
                                />
                            </div>

                        </div>
                    </section>
                </main>

            </div>

        </>
    )
}
