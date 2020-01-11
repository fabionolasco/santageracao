import React from 'react'
import './src/styles/main.scss'
import { Helmet } from 'react-helmet'

export const wrapPageElement = ({ element }) => (
    <>
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
        </Helmet>
        {element}
    </>

)
