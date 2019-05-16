import React from 'react';
import Styles from './shit.css';

export interface IShitPageProps { }
export interface IShitPageState { }

export default class ShitPage extends React.Component<IShitPageProps, IShitPageState> {
    render() {
        return(
            <div className={Styles.shit}>
                FC Sch**** 05
            </div>
        );
    }
}