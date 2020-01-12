import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from '../components/layouts/layout-main';

export default () => (
    <>
        <Helmet>
            <title>Santa Geração - Mantenedores</title>
        </Helmet>
        <LayoutMain title="Mantenedores" fullheader={false}>
            Mantenedores
        </LayoutMain>
    </>
)
