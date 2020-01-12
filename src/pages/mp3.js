import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from '../components/layouts/layout-main';

export default () => (
    <>
        <Helmet>
            <title>Santa Geração - MP3</title>
        </Helmet>
        <LayoutMain title="MP3" fullheader={false}>
            MP3
        </LayoutMain>
    </>
)
