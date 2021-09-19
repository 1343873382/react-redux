import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createJiarenAction} from "../../redux/action/person"
import {nanoid} from "nanoid"
 class Person extends Component {
     add=()=>{

         const name=this.refs.input1.value
         const age=this.refs.input2.value
         console.log(name);
         console.log(age);
         
         const personObj={id:nanoid(),name,age}
           this.props.jiayiren(personObj)
           console.log(this.props.yiduiren);
           this.refs.input1.value=""
           this.refs.input2.value=""
     }
    render() {
        return (
            <div>
                <h1>我们是person组件 上面{this.props.count}</h1>
                <input ref="input1" type="text"/>
                <input ref="input2" type="text"/>
                <button onClick={this.add}>加人</button>
                <ul>
                
                   {this.props.yiduiren.map((p)=>{
                       return <li key={p.id}>{p.name}--{p.age}</li>
                   })}
                </ul>
            </div>
        )
    }
}
export default connect(
state => ({yiduiren:state.rens,count:state.he}),
{jiayiren:createJiarenAction}
)(Person)