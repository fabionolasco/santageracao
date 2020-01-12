import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from '../components/layouts/layout-main';

export default () => (
    <>
        <Helmet>
            <title>Santa Geração - Youtube</title>
        </Helmet>
        <LayoutMain title="Youtuve" fullheader={false}>
            <main className="grid-x">
                <div className="cell">Youtube</div>
            </main>
        </LayoutMain>
    </>
)
