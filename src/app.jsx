import React, { Component } from 'react'
import Count from "./containers/count/index"
import Person from "./containers/person/index"
export default class app extends Component {
    render() {
        return (
            <div>
            <Count ></Count>
            <Person></Person>
            </div>
        )
    }
}
