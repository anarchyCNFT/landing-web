import React, { Component } from "react"
// import logo from '../../components/Logo/logo.svg';

import Header from '../../components/Header/Header';
import Content from './Content';
import Footer from '../../components/Footer/Footer';

class Index extends Component {
    render() {
        return (
            <>
                <Header />
                <Content />
                <Footer />
            </>

        )
    }
}

export default Index;