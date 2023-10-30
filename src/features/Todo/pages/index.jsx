import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DetailPage from './DetailPage';
import ListPage from './ListPage';
import NotFound from '../../../components/Loading/NotFound';

TodoFeature.propTypes = {
};



function TodoFeature(props) {
    const match = useRouteMatch()
    return (
            <Switch>
                <Route path={match.path} component={ListPage} exact></Route>
                <Route path={`${match.path}/:todoId`} component={DetailPage}></Route>
                <Route  component={NotFound}></Route>
            </Switch>


    );
}

export default TodoFeature;