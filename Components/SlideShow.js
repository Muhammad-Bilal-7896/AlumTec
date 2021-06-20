import React from 'react';
import Link from "next/link"

const SlideShow = () => {
    return (
        <div>
            <section className="showcase">
                <div className="video-container">
                    <video autoPlay loop muted controls>
                        <source src="../UI/SlideVideo.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="content">
                    <h3 className="animateIt">Aluminium curtain wall, windows and doors are our speciality.</h3>
                    <h4 className="animateIt" style={{ fontWeight: "lighter" }}>Glazing solutions are our passion.</h4>
                    <Link href="/about"><a className="btns">Read More</a></Link>
                </div>
            </section>
        </div>
    )
}
export default SlideShow;