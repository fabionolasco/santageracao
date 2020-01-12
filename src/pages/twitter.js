import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from '../components/layouts/layout-main';

export default () => (
    <>
        <Helmet>
            <title>Santa Geração - Twitter</title>
        </Helmet>
        <LayoutMain title="Twitter" fullheader={false}>
            <main className="grid-x">
                <div className="cell">Twitter</div>
            </main>
        </LayoutMain>
    </>
)
