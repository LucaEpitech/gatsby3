import React from 'react'
import {Link} from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
    return (
    <section className="py-5">
        <div className="container">
            <Title title="our story"/>
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center">
                    <p className="lead text-muted mb-5">
                        lLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra accumsan nulla, id porttitor neque posuere pretium.
                        Donec bibendum nisl ut velit vehicula venenatis. In hac habitasse platea dictumst. Quisque interdum blandit tincidunt. 
                        Donec eu diam at nulla porttitor ultrices. Donec hendrerit luctus mauris, eget consectetur risus euismod at. Orci varius
                        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus bibendum molestie purus eget vestibulum. 
                    </p>
                    <Link to="/about/">
                        <button className="btn text-uppercase btn-yellow"> about page </button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    )
}
