import NavBar from "../_navbar"
import Footer from "../_footer"
import Link from "next/link"
import ProjectElement from "./_projectElement"

export default function projects() {
    return (
        <div>
            <NavBar/>
            <div className="projects-heading-background">
                <div className="projects-heading-container">
                    <div className="projects-heading-title">
                        projects
                    </div>
                    <div className="projects-heading-subtitle">
                        take a look at some of my work!
                    </div>
                </div>
            </div>
            <div className="projects-container">
                <ProjectElement
                    title="dablincx.dev"
                    description="This website! I built it using Next.js, a React framework."
                    imagelink="/media/github.svg"
                    link="/"
                />
                <ProjectElement
                    title="Meme Video Generator"
                    description="Automatically generates almost youtube-ready meme videos using MoviePy."
                    imagelink="https://opengraph.githubassets.com/9282e8a31dd84ef0ff959d9765e290fc7a018c3dd4055045361e687e825c4785/DaBlincx/meme-video-gen"
                    link="https://github.com/DaBlincx/meme-video-gen/"
                />
            </div>
            <Footer />
        </div>
    )
}