
import React, { Component } from 'react';
import { Route , Link } from 'react-router-dom';

class NavItem extends Component {
    render() {
        const { to , activeOnlyWhenExact , children } = this.props;
        return (
            <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
               
                    <Link className={['nav-item' , match ? 'active' : ''].join(' ')} to={to}>{children}</Link>
               
            )}/>
        );
    }
}

export default NavItem;