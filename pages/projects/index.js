
import NavBar from '@/components/_navbar'
import Footer from '@/components/_footer'
import Link from "next/link"
import ProjectElement from "@/components/_projectElement"

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
                    title={"dablincx.dev"}
                    description={"This website! I built it using Next.js, a React framework."}
                    imagelink={"/media/projects/dablincx.dev.png"}
                    link={"https://dablincx.dev"}
                />
                <ProjectElement
                    title={"Meme Video Generator"}
                    description={"Automatically generates almost YouTube-ready meme videos using MoviePy."}
                    imagelink={"/media/projects/meme-video-gen.png"}
                    link={"https://github.com/DaBlincx/meme-video-gen/"}
                />
                <ProjectElement
                    title={"Beatsaver.com Map Scraper"}
                    description={"Downloads all beatmaps from beatsaver.com and saves them to a folder. idk why you'd need this but it exists."}
                    imagelink={"/media/projects/beatsaver-map-scraper.png"}
                    link={"https://gist.github.com/DaBlincx/f037bbfb661797f1f670f987c3a8c1e6"}
                />
            </div>
            <Footer />
        </div>
    )
}