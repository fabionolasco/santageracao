import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from '../components/layouts/layout-main';
import CardList from '../components/partials/card-list';

export default () => (
    <>
        <Helmet>
            <title>Santa Geração - Bem vindo!</title>
        </Helmet>
        <LayoutMain title="Página Initical" fullheader={true}>
            <CardList />
        </LayoutMain>
    </>
)
