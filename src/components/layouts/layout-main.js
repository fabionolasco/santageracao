import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme/theme'

import Header from '../partials/header'
import Footer from '../partials/footer'
import Container from '@material-ui/core/Container'

export default (props) => (
    <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Header title={props.title} fullheader={props.fullheader} />
                    {props.children}
                <Footer />
            </Container>
        </ThemeProvider>
    </>
)
