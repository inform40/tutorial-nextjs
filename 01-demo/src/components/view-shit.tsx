import * as React from "react";
import * as Styles from './view-shit.css';

export interface IShitViewProps { }
export interface IShitViewState { }

export default class ShitView extends React.Component<IShitViewProps, IShitViewState> {
    render() {
        return (
                <div className={Styles.shit}>
                    FC Sch**** 05
                </div>
        );
    }
}