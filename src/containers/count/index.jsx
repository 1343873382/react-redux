import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createIncrementAction,createDecrementAction}from "../../redux/action/count"
 class countUI extends Component {
    increment=()=>{
        const {select1:{value}}=this.refs
      this.props.jia(value*1)
       
    }
decrement=()=>{     
    const {select1:{value}}=this.refs
    this.props.jian(value*1)
  }
incrementIfOdd=()=>{
    const {select1:{value}}=this.refs
     if(this.props.count%2===1){
        this.props.jia(value*1)
     }
    
}
incrementAsync=()=>{
    const {select1:{value}}=this.refs
       setTimeout(()=>{  this.props.jia(value*1)},500)
       
}
    render() {
        return (
            <div>
                <h1>当前求和:{this.props.count}</h1>
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
export default connect(
    // 状态
    state=>({count:state.he}),
    //操作
    {jia:createIncrementAction,
    jian:createDecrementAction
    }
)(countUI)
