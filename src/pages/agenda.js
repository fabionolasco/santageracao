import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from '../components/layouts/layout-main';

export default () => (
    <>
        <Helmet>
            <title>Santa Geração - Agenda</title>
        </Helmet>
        <LayoutMain title="Agenda" fullheader={false}>
            <main className="grid-x">
                <div className="cell">Agenda</div>
            </main>
        </LayoutMain>
    </>
)
