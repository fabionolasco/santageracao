import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from '../components/layouts/layout-main';

export default () => (
    <>
        <Helmet>
            <title>Santa Geração - Cursos</title>
        </Helmet>
        <LayoutMain title="Cursos" fullheader={false}>
            <main className="grid-x">
                <div className="cell">Cursos</div>
            </main>
        </LayoutMain>
    </>
)
