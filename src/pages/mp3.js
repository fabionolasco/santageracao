import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from '../components/layouts/layout-main';

export default () => (
    <>
        <Helmet>
            <title>Santa Geração - MP3</title>
        </Helmet>
        <LayoutMain title="MP3" fullheader={false}>
            <main className="grid-x">
                <div className="cell">MP3</div>
            </main>
        </LayoutMain>
    </>
)
