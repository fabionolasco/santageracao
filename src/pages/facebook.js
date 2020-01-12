import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from '../components/layouts/layout-main';

export default () => (
    <>
        <Helmet>
            <title>Santa Geração - Facebook</title>
        </Helmet>
        <LayoutMain title="Facebook" fullheader={false}>
            Facebook
        </LayoutMain>
    </>
)
