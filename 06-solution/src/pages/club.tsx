import React from 'react';
import Page from '../components/page/page';
import { withRouter, WithRouterProps } from 'next/router';

export interface IClubPageProps extends WithRouterProps { }
export interface IClubPageState { }

class ClubPage extends React.Component<IClubPageProps, IClubPageState> {
    render() {
        return(
            <Page>
                <div>
                    lol, {this.props.router.query.club} is also shit
                </div>
            </Page>
        );
    }
}

export default withRouter(ClubPage);