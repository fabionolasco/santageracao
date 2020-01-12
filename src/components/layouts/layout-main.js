import React from 'react'
import Header from '../partials/header'
import Footer from '../partials/footer'

export default (props) => (
    <>
        <div className="">
            <Header title={props.title} fullheader={props.fullheader} />
                {props.children}
            <Footer />
        </div>
    </>
)
