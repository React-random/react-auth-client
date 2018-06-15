import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.authenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props}/>;
        }
    }

    function mapStateToProps({ auth: {authenticated} }) {
        return {authenticated};
    }

    return connect(mapStateToProps) (ComposedComponent);
};