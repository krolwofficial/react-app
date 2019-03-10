import React from 'react';
import { Switch, Route} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import PostsListing from './features/posts-listing'
import PostDetails from './features/post-details';

const Router = () => {
    return (
        <React.Fragment>
            <Route render={({location}) =>(
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={30000}
                        classNames="fade"
                    >
                        <Switch location={location}>
                            <Route exact path="/" component={PostsListing} />
                            <Route path="/post" component={PostDetails} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
        </React.Fragment>
    );
}
 
export default Router;