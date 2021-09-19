import ReactDOM from "react-dom"
import App from "./app"
import store from "./redux/store"
import { Provider } from "react-redux"
/* store.subscribe(() => {
    ReactDOM.render( < App / > , document.getElementById("root"))
}) */
// 此处用provider是为了让app的后代组件全能接收到store，不用自己一个个去匹配

ReactDOM.render( < Provider store = { store } > < App / > < /Provider>, document.getElementById("root"))