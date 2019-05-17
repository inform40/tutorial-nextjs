import * as React from "react";
import Application from "./application";
import {Router, StaticRouter} from "react-router";
import {BrowserRouter, HashRouter} from "react-router-dom";

export interface IAppRouterProps { }
export interface IAppRouterState { }

export default class AppRouter extends React.Component<IAppRouterProps, IAppRouterState> {
    render() {
        return(
            <HashRouter>
                <Application />
            </HashRouter>
        );
    }
}