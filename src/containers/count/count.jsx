import CountUI from "../../components/count/count"
import {connect} from "react-redux"
import {createIncrementAction,createDecrementAction}from "../../redux/action/count"
function mapStateToprops(state){
    return {count:state}
}
function mapDispatchToProps(dispatch){
    return {
        jia:number=>dispatch(createIncrementAction(number)),
        jian:number=>dispatch(createDecrementAction(number))
    }
}
export default connect(mapStateToprops,mapDispatchToProps)(CountUI)