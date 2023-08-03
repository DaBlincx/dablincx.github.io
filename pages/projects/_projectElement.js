import Link from "next/link"
import Image from "next/image"

function ProjectElement({ title, description, imagelink, iframelink, link }) {
    // if no imagelink is given, do not show the image container
    const imageContainer = imagelink ? (
        <div className="project-element-image-container">
            <Image
                src={imagelink}
                width={400}
                height={300}
                alt={title}
            />
        </div>
    ) : null;
    const iframeContainer = iframelink ? (
        <div className="project-element-image-container">
            <iframe
                src={iframelink}
                width="100%"
                height="100%"
                alt={title}
            />
        </div>
    ) : null;
    return (
        <div className="project-element-container">
            {imageContainer}
            {iframeContainer}
            <div className="project-element-text-container">
                <div className="project-element-title">
                    <Link className="project-element-title-link" href={link}>
                        {title}
                    </Link>
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