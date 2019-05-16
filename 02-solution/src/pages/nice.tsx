import React from 'react';

export interface INicePageProps { }
export interface INicePageState { }

export default class NicePage extends React.Component<INicePageProps, INicePageState> {
    render() {
        return(
            <div>
                Ballspielverein Borussia aus Dortmund
            </div>
        );
    }
}