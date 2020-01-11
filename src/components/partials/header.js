import React from 'react'
import './header.module.scss'

export default (props) => (
    <header className={props.fullheader ? 'header-full' : 'header-partial'}>
        <h1 hidden>Santa Geração</h1>
        <h2 hidden>{props.title}</h2>
    </header>
)
