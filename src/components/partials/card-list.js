import React from 'react'
import Card from './card'
import './card-list.scss';

export default () => (
    <div className="sg-card-list">
        <Card to="/agenda">Agenda</Card>
        <Card to="/youtube">Youtube</Card>
        <Card to="/instagram">Instagram</Card>
        <Card to="/twitter">Twitter</Card>
        <Card to="/facebook">Facebook</Card>
        <Card to="/spotify">Spotify</Card>
        <Card to="/mp3">MP3</Card>
        <Card to="/cursos">Cursos</Card>
        <Card to="/israel">Viagem à Israel</Card>
        <Card to="/mantenedores">Mantenedores</Card>
    </div>
)
