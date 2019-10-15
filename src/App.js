import React from 'react';
import { renderRoutes } from 'react-router-config';
import { DomclickLayout, Environment } from '@domclick-ui/domclick-layout';

import { authServiceOptions } from './config';

import './App.scss';

const App = ({ route }) => {
  return (
    <DomclickLayout
      authServiceOptions={authServiceOptions}
      signOutReturnUrl=""
      environment={Environment.QA}
      toplineOptions={{ isSticky: true }}
    >
      <div>{renderRoutes(route.routes)}</div>
    </DomclickLayout>
  );
};

App.defaultProps = {
  route: null
};

export default { component: App };
