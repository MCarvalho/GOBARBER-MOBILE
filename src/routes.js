import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  })
);
