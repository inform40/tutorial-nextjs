import React from 'react';
import Page from '../components/page/page';

export interface IErrorPageProps { }
export interface IErrorPageState { }

export default class ErrorPage extends React.Component<IErrorPageProps, IErrorPageState> {
    render() {
        return(
            <Page>
                <div>
                    Oh no! You broke the internet :(
                </div>
            </Page>
        );
    }
}