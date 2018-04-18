import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './MenuStyles';
import { connect } from 'react-redux';


class List extends Component {
    render() {
        return (
            <div>
                <div className={css(styles.block2)}>
                    {this.props.store.map((user, index) =>
                        <h4 key={index}>Name: {user.name} | age: {user.age}</h4>
                    )}
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(List);