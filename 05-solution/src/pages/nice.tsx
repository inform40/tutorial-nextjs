import React from 'react';
import Styles from './nice.css';
import Page from '../components/page/page';

export interface INicePageProps { }
export interface INicePageState { }

export default class NicePage extends React.Component<INicePageProps, INicePageState> {
    render() {
        return (
            <Page>
                <div className={Styles.nice}>
                    Ballspielverein Borussia aus Dortmund
                </div>
            </Page>
        );
    }
}