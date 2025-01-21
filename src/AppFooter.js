import React, { Component, Fragment } from 'react';
import './AppFooter.css';

export default class AppFooter extends Component {
    render() {
        const currentYear = new Date().getFullYear();
        const lastYear = currentYear - 1;
        return (
            <Fragment>
            <hr />
            <p className='footer'>Copyright &copy; {lastYear} - {currentYear} KeyloginSec Ltd.</p>
            </Fragment>
        );
    }
}