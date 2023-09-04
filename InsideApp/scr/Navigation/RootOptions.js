import * as React from 'react';
import { CommonActions } from '@react-navigation/native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();


export const Navigate = ({ name, params }) => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};


export const NavigateAndClearStack = ({ name, params }) => {
  if (isReadyRef.current && navigationRef.current
    && navigationRef.current.getCurrentRoute().name != name) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: name, params: params }],
      })
    );

  }
};

export const GoBack = () => {
  if (isReadyRef.current && navigationRef.current
    && navigationRef.current.canGoBack()) {
    navigationRef.current.goBack();
  }

};

