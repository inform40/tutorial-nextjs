import React from 'react';
import Styles from './page.css';
import Head from 'next-server/head';
import Link from 'next/link';

export interface IPageProps { }
export interface IPageState { }

export default class Page extends React.Component<IPageProps, IPageState> {
    render() {
        return(
            <div className={Styles.page}>
            <Head>
                <title>NextJS Application</title>
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
                <style tsx global>
                    {
                        `
                            html,
                            body,
                            #__next{
                                height: 100%;
                                width: 100%;

                                margin: 0;
                                padding: 0;

                                font-family: 'Roboto', sans-serif;
                            }
                        `
                    }
                </style>
            </Head>
                <header>
                    <Link href="/nice">
                        <a title='Nicer Link'>Nice</a>
                    </Link>
                    <Link href="/shit">
                        <a title='Shit Link'>Shit</a>
                    </Link>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}