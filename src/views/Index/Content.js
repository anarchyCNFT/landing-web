import React from "react";
import Collection from "../../components/Collection/Collection"
import Sale from "../../components/Sale/Sale"
import Rarities from "../../components/Rarities/Rarities"
import Roadmap from "../../components/Roadmap/Roadmap"
import About from "../../components/About/About"

function Content() {
    return (
        <div>
            <section id="About" className="black-bg content align-items-center">
                <About />
            </section>
            <section id="Collection" className="rarity-section content align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="xMidYMin slice" ><path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="#000000" fillOpacity="1"/></svg>
                <Collection/>
                <svg style={{marginTop:"5vh"}} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" preserveAspectRatio="xMidYMin slice"  viewBox="0 0 1200 120"><path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill" fill="#000000" fillOpacity="1"/></svg>
            </section>
                <section id="Rarities" className="black-bg d-flex content align-items-center">
                    <Rarities />
                </section>
                <section id="buy" className="content buy align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="xMidYMin slice" ><path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="#000000" fillOpacity="1"/></svg>
                    <Sale />
                </section> 
            <section id="roadmap" className="align-items-center features-icons text-center">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="xMidYMin slice" ><path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="#191d28" fillOpacity="1"/></svg>
                <Roadmap />
            </section>
        </div>
    );
}

export default Content;