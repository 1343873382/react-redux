import React, { Component } from 'react'
import Count from "./containers/count/index"
import store from "./redux/store"
export default class app extends Component {
    render() {
        return (
            <div>
            <Count store={store}></Count>
            </div>
        )
    }
}
