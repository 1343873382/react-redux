import React, { Component } from 'react'
import store from "../../redux/store"
import {createIncrementAction,createDecrementAction} from "../../redux/count_action"
export default class count extends Component {
    state={}
    componentDidMount(){
        store.subscribe(()=>{
             this.setState({})
        })
    }
    increment=()=>{
        const {select1:{value}}=this.refs
       store.dispatch(createIncrementAction(value*1))
       
    }
decrement=()=>{     
    const {select1:{value}}=this.refs
    store.dispatch(createDecrementAction(value*1))
  }
incrementIfOdd=()=>{
    const {select1:{value}}=this.refs
     if(store.getState()%2===1){
        store.dispatch(createIncrementAction(value*1))
     }
    
}
incrementAsync=()=>{
    const {select1:{value}}=this.refs
       setTimeout(()=>{  store.dispatch(createIncrementAction(value*1))},500)
       
}
    render() {

        return (
            <div>
                <h1>当前求和:{store.getState()}</h1>
                <select ref="select1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select> &nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数时再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
