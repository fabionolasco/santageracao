import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from '../components/layouts/layout-main';

export default () => (
    <>
        <Helmet>
            <title>Santa Geração - Israel</title>
        </Helmet>
        <LayoutMain title="Israel" fullheader={false}>
            Israel
        </LayoutMain>
    </>
)
