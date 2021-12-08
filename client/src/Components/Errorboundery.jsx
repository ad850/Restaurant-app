import React, { Component } from 'react'


class Errorboundery extends Component {

    constructor() {

        super()

        this.state = {

            haserror: false
        }

    }


    static getDerivedStateFromError() {

        return { haserror: true }
    }

    componentDidCatch(error, errInfo) {

        console.log("logging", error, errInfo);


    }


    render() {
        return (
            <>

                {
                    this.state.haserror ? <h1>Something went wrong</h1> : this.props.children

                }

            </>
        )
    }
}



export default Errorboundery;