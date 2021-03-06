import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from '../components/layouts/layout-main';

export default () => (
    <>
        <Helmet>
            <title>Santa Geração - Instagram</title>
        </Helmet>
        <LayoutMain title="Instagram" fullheader={false}>
            <main className="grid-x">
                <div className="cell">Instagram</div>
            </main>
        </LayoutMain>
    </>
)
