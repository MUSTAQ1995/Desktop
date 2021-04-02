import React, { Component } from 'react'

export class Higher extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            // "DataSource" is some global data source;
            comments: DataSource.getComments()
        }
    }

    componentDidMount() {
        //Subscribe to changes
        DataSource.addchangeListener(this.handleChange);
    }

    componentWillUnmount() {
        //Clean up listner
        DataSource.removeChangeListner(this.handleChange);
    }

    handleChange() {
        //update component state whenever the data source changes
        this.setState({
            comments: DataSource.getComments()
        })
    }
    render() {
        return (
            <div>
                {this.state.comments.map((comment) => (
                    <comment comment = {comment} key = {comment.id} />
                ))}
            </div>
        )
    }
}

export default Higher
