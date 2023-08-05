import Link from "next/link"
import Image from "next/image"
import React, { useState } from 'react'

function WindowBar({ linkurl, handleCloseFunction }) {
    function handleClose() {
        handleCloseFunction();
    }

    return (
        <div className="project-element-windowbar-container">
            <div className="project-element-windowbar-minimize">
                <div className="minimize-icon"></div>
            </div>
            <div className="project-element-windowbar-maximize" onClick={
                () => {
                    window.open(linkurl, '_blank');
                }
            }>
                <div className="maximize-icon"></div>
            </div>
            <div className="project-element-windowbar-close" onClick={
                () => {
                    handleClose();
                }
            }>
                <div className="close-icon"></div>
            </div>
        </div>
    )
}

function ViewMoreButton({ linkurl }) {
    return (
        <div className="project-element-viewmore">
            <Link href={linkurl} className="project-element-viewmore-link">
                <div className="project-element-viewmore-button">
                    View More
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="project-element-viewmore-button-arrows">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 12-6-6m6 6-6 6m6-6H5"/>
                </svg>
            </Link>
        </div>
    )
}

function ImageContainer({ imagelink, title }) {
    return imagelink ? (
        <div className="project-element-image-container">
            <Image
                className="project-element-image"
                src={imagelink}
                width={3000}
                height={3000}
                alt={title}
            />
        </div>
    ) : null;
}

function ProjectElement({ title, description, imagelink, link }) {
    const [isVisible, setIsVisible] = useState(true);
    function handleClose() {
        setIsVisible(false);
    };
    return (
        <div>
            {isVisible &&
                <div div className = "project-element-container" >
                    <WindowBar linkurl={link} handleCloseFunction={handleClose} />
                    <ImageContainer imagelink={imagelink} title={title} />
                    <div className="project-element-text-container">
                        <div className="project-element-title">
                            <Link className="project-element-title-link" href={link}>
                                {title}
                            </Link>
                        </div>
                        <div className="project-element-description">
                            {description}
                        </div>
                        <ViewMoreButton linkurl={link}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectElement;