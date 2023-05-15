import React from "react";
import { Link } from 'react-router-dom'

import bulb from '../images/bulb.png'
import logo1 from '../images/logo1.png'
import headshot from '../images/headshot.png'
import coffee from '../images/coffee.png'


export default function RatwerksEngineering() {


    return (
        <div className="container" >
            <header className=" col-4 masthead">
                <div className="grid-container h-100">
                    <div className="col-12 h-100 align-items-center">
                        <img style={{
                            position: "relative",
                            marginLeft: "-1pc", marginTop: "3pc"
                        }} src={logo1} className="logo3" alt="logo" />
                        <div className="col-12 text-center">
                            <div style={{ fontWeight:"" }} className="masthead-title">RatWerks Exists to Bring Your Invention Across the Finish Line</div>
                        </div>
                    </div>
                </div>
            </header>


            <section className="grid-container">
                <div className="grid-child col-12" style={{marginTop:"2pc"  }}>

                    <ul className='ul-child'style={{ }}>Have you ever had that one idea that you think would make but,
                        you didn't know where to start? Ratwerks Engineering wants to help you get there.
                        Our team has a passion for creativity, ingenuity and serving the community.
                        We have over 7 years of mechanical system design and product development experience that we wish share with you.
                    </ul>

                </div>

                <div className="grid-child" style={{ marginTop: "1pc" }}>
                    <img style={{
                        position: "relative"
                    }} src={bulb} className="logo5" alt="logo" />

                </div>
            </section>

            <section className="grid-container">
                <div className="grid-child" style={{}}>
                    <img style={{
                        position: "relative"
                    }} src={coffee} className="logo4" alt="logo" />

                </div>
                <div className="grid-child" style={{ marginTop: "10pc" }}>

                    <p className= 'contact-paragraph'style={{ lineHeight: "3" }}>From start to finish our service is driven to take your ideas, turn them into functional prototypes and orient them for production. With advisement on lean manufacturing, proper documentation and even how to obtain a U.S. Patent: Ratwerks is a full service engineering stop. If you want to see your product or application through, Ratwerks is uniquely equipped to provide:
                        3D Design,
                        Calculations to meet Desired Performance Metrics
                        GD&T Engineering Drawings
                        Production level Tolerance Stack Analysis
                        Assembly and Quality Control Plans
                    </p>

                    <Link to="/contact">
                        <button style={{ marginLeft: "7pc", padding: "5px", color:"black",backgroundColor: "white", borderRadius: "8px" }}>Lets Build Something Together</button>
                    </Link>
                </div>

            </section>
            <section className="grid-container">
                <div className="grid-child" style={{ marginBottom: "5pc", marginTop: "10pc" }}>
                    <p className='about col-12'style={{ }}>Alex has spent the first part of his career in effective roles and in diverse problem solving positions for both large and small companies. He has two patents in Mechanical and Fluid systems, along with a few more provisional and non-provisional applications that are pending. During time as a civil structure designer, Alex helped design and project manage over 5 million dollars’ worth of signage and architecture elements across the US. 
                    </p>
                    <p className='about'style={{}}>As a project engineer, he took a complicated production line that produced 300 units a year and revamped the process and product design to over 3000 units a year out the door. Alex has worked alongside union construction labor, Assembly line technicians and held meetings for CEOs and VPs. At this point in his career, Alex is compelled by the idea of lifting up those around him and provide high level engineering labor to the everyman
               </p>
               </div>
                <div className="grid-child" style={{ marginTop: "10pc", marginLeft: "10pc" }}>
                    <div className="owner">Owner/Engineer Alex DiBlasio</div>
                    <img style={{
                        position: "relative"
                    }} src={headshot} className="headshot" alt="headshot" />

                </div>

            </section>


        </div>
    );
}