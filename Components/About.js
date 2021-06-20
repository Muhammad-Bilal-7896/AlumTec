import React from 'react';

import Link from "next/link";
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {

    return (
        <div>
            <br />
            <h1 style={{ textTransform: "uppercase" }}>
                <ScrollAnimation delay={400}
                    animateIn='flipInX'
                    animateOut='flipOutY'
                >
                    Alumtec Glazing solution :
                </ScrollAnimation>
            </h1>
            <h3 style={{ textTransform: "uppercase", fontWeight: "lighter" }}>
                <ScrollAnimation animateIn="bounceInLeft" delay={200}>
                    We make it easy for you to find the best windows and doors <br />
                    to reflect your style and taste
                </ScrollAnimation>

            </h3>
            <h5 style={{ fontWeight: "lighter" }}>
                <ScrollAnimation animateIn="fadeIn" delay={300}>
                    Alumtec Glazing solution Inc. is a leading aluminum and glass solutions provider offering a wide
                    range of aluminum and glass products and services.We specialize in
                    design, fabrication and installation of aluminum windows, woors and curtain wall
                    for commercial and residential applications.
                    We are committed towards quality and customer service. <br /> <br /> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Quality is not just another goal, it is our basic
                    strategy for survival and future as it’s our journey to the Total Quality Management.
                    It is our long-term commitment to continously improve our services, provide a safe work environment for our employees, and efficiently manage our business process and supplier selection retention. It is our goal to posture
                    our company for market expansion, thereby providing improved job security and quality for all.
                </ScrollAnimation>
            </h5>
            <br />
            <div style={{ textAlign: "center" }}>
                {/* id="aboutuspagebtn" */}
                <Link href="/about"><a id="aboutuspagebtn" className="btn">Learn More</a></Link>
            </div>

            <br />

            <div className="text-center">
                <img src="UI/proudlycanadian.JPEG XR" width="250" alt="proudlycanadian" />
                <br />
                <br />
                <h3 style={{ textTransform: "uppercase", fontWeight: "lighter" }}>
                    <ScrollAnimation animateIn="bounceInLeft" delay={200}>
                        Proudly Canadian
                    </ScrollAnimation>
                </h3>
            </div>
            <br />

        </div>
    )
}
export default About;