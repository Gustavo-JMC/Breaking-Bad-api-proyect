import React from "react";
import ReactDOM from "react-dom";

import "./styles/general.scss";
// import Home from "./views/Home";
import AppRouter from "./router/AppRouter";

// const App = () => < />;

if (module.hot) {
	module.hot.accept();
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));
