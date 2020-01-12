import React from 'react'
import { Helmet } from 'react-helmet'
import './src/styles/main.scss'

export const wrapPageElement = ({ element }) => (
    <>
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
        </Helmet>
        <div>
            {element}
        </div>
    </>
)
