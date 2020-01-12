import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from '../components/layouts/layout-main';

export default () => (
    <>
        <Helmet>
            <title>Santa Geração - Spotify</title>
        </Helmet>
        <LayoutMain title="Spotify" fullheader={false}>
            Spotify
        </LayoutMain>
    </>
)
