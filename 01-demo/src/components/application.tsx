
import {Link, Route, Switch} from "react-router-dom";
import * as React from "react";
import * as Styles from './application.css';
import NiceView from "./view-nice";
import NotFoundView from "./view-not-found";
import ShitView from "./view-shit";
import IndexView from "./view-index";

export interface IApplicationProps { }
export interface IApplicationState { }

export default class Application extends React.Component<IApplicationProps, IApplicationState> {
    render() {
        return(
            <div className={Styles.page}>
                <header>
                    <Link to="/nice">
                        Nice
                    </Link>
                    <Link to="/shit">
                       Shit
                    </Link>
                </header>
                <main>
                    <Switch>
                        <Route path={'/'} component={IndexView} exact />
                        <Route path={'/nice'} component={NiceView} exact />
                        <Route path={'/shit'} component={ShitView} exact />
                        <Route component={NotFoundView}  />
                    </Switch>
                </main>
            </div>
        );
    }
}