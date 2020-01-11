import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from '../components/layouts/layout-main';
import Card from '../components/partials/card';

export default () => (
    <>
        <Helmet>
            <title>Santa Geração - Bem vindo!</title>
        </Helmet>
        <LayoutMain title="Página Initical" fullheader={true}>
            <Card>Agenda</Card>
            <Card>Youtube</Card>
            <Card>Instagram</Card>
            <Card>Twitter</Card>
            <Card>Facebook</Card>
            <Card>Spotify</Card>
            <Card>MP3</Card>
            <Card>Cursos</Card>
            <Card>Viagem à Israel</Card>
            <Card>Mantenedores</Card>
        </LayoutMain>
    </>
)
