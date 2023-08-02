import Link from "next/link"
import Image from "next/image"

function ProjectElement({ title, description, imagelink, link }) {
    return (
        <div className="project-element-container">
            <div className="project-element-image-container">
                <Image
                    src={imagelink}
                    width={400}
                    height={300}
                    alt={title}
                />
            </div>
            <div className="project-element-text-container">
                <div className="project-element-title">
                    {title}
                </div>
                <div className="project-element-description">
                    {description}
                </div>
                <div className="project-element-viewmore">
                    <Link href={link}>
                        <div className="project-element-viewmore-button">
                            View More
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectElement;