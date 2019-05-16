import React from 'react';
import Styles from './shit.css';
import Page from '../components/page/page';

export interface IShitPageProps { }
export interface IShitPageState { }

export default class ShitPage extends React.Component<IShitPageProps, IShitPageState> {
    render() {
        return (
            <Page>
                <div className={Styles.shit}>
                    FC Sch**** 05
                </div>
            </Page>
        );
    }
}