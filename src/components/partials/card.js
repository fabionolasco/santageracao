import React from 'react'
import { Link } from 'gatsby'
import './card.scss';

export default (props) => (
    <Link to={`${props.to}`} className="sg-card card-shadow">
        <span className="card-label">{props.children}</span>
    </Link>
)
