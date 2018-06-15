import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signin } from '../../actions/index';

class Signin extends Component {
    onSubmit = (credentials) => {
        this.props.signin(credentials, () => {
            this.props.history.push('/feature');
        });
    };

    render() {
        const {handleSubmit} = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name={"email"}
                        type={"text"}
                        component={"input"}
                        autoComplete={"none"}
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name={"password"}
                        type={"password"}
                        component={"input"}
                        autoComplete={"none"}
                    />
                </fieldset>
                <div>
                    {this.props.errorMessage}
                </div>
                <button>Sign In</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    };
}

export default compose(
    connect(mapStateToProps, { signin }),
    reduxForm({form: 'signin'})
)(Signin);