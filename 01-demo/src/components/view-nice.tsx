import * as React from "react";
import * as Styles from './view-nice.css';

export interface INiceViewProps { }
export interface INiceViewState { }

export default class NiceView extends React.Component<INiceViewProps, INiceViewState> {
    render() {
        return (
                <div className={Styles.nice}>
                    Ballspielverein Borussia aus Dortmund
                </div>
        );
    }
}