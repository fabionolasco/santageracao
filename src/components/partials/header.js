import React from 'react'
import { Link } from 'gatsby'
import './header.scss'

export default (props) => (
    <Link to="/">
        <header className={props.fullheader ? 'header-full' : 'header-partial'}>
            <h1 hidden>Santa Geração</h1>
            <h2 hidden>{props.title}</h2>
            <div className="sg-background"></div>
        </header>
    </Link>
)
