import React from 'react'
import { Link } from 'gatsby'
import Channels from './channels'
import './header.scss'

export default (props) => (
    <div className="sg-header-wrapper">

        <header className={props.fullheader ? 'header-full' : 'header-partial'}>
            <h1 hidden>Santa Geração</h1>
            <h2 hidden>{props.title}</h2>
            <div className="sg-background"></div>
            <Link to="/"><div className="sg-logo">Logo</div></Link>
        </header>
        
        <div className="sg-header-channels"><Channels /></div>
        
    </div>
)
