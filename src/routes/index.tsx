import React, {  } from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';
 
import MainLayout from '../layouts/MainLayout';

import NotFound from './../pages/NotFound/NotFound';
import SignIn from './../pages/SignIn/SignIn';
import Shop from './../pages/Shop/Shop';
import Checkout from './../pages/Checkout/Checkout';
import ProtectedRoute from './ProtectedRoute';

const Routes: React.FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact={true} path="/" component={SignIn} />
        <ProtectedRoute exact={true} path="/shop" component={Shop} />
        <ProtectedRoute exact={true} path="/checkout" component={Checkout} />
        <Route exact={true} path="*" component={NotFound} />
      </Switch>
    </MainLayout>
  )
};

export default Routes;
