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
                content
            </div>
            <Footer />
        </div>
    )
}