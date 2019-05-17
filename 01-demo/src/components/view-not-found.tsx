import * as React from "react";

export interface INotFoundViewProps { }
export interface INotFoundViewState { }

export default class NotFoundView extends React.Component<INotFoundViewProps, INotFoundViewState> {
    render() {
        return(
                <div>
                    Oh no! You broke the internet :(
                </div>
        );
    }
}