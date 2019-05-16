import React from 'react';
import Styles from './nice.css';

export interface INicePageProps { }
export interface INicePageState { }

export default class NicePage extends React.Component<INicePageProps, INicePageState> {
    render() {
        return(
            <div className={Styles.nice}>
                Ballspielverein Borussia aus Dortmund
            </div>
        );
    }
}