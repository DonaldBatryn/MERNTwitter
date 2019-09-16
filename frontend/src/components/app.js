import React from 'react';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TweetsContainer from './tweets/tweets_container';
import ProfileContainer from './profile/profile_container';
import TweetComposeContainer from './tweets/tweet_compose_container';


const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute extact path="/login" component={LoginFormContainer}/>
            <AuthRoute extact path="/signup" component={SignupFormContainer}/>

            <ProtectedRoute extact path="/tweets" component={TweetsContainer}/>
            <ProtectedRoute extact path="/profile" component={ProfileContainer}/>
            <ProtectedRoute extact path="/new_tweet" component={TweetComposeContainer}/>
        </Switch>
    </div>
);

export default App;