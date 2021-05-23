import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../views/HomePage";
import NotFound from "../views/NotFound";
import TableView from "../views/TableView";

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/NotFound">
					<NotFound />
				</Route>
				<Route path="/tabla/:pageID">
					<TableView />
				</Route>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
};

export default AppRouter;
