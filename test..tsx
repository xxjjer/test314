import React, {Component} from "react";

export default class Tsx extends Component<any, any> {
    age = 31

    render() {
        return (
            <>
                {this.age}
            </>
        );
    }
}
