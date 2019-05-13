import React from 'react';

export const { Provider, Consumer } = React.createContext();

export const withParentData = (WrappedComponent) => {
  const withParendData = (props) => (
    <Consumer>
      {context => <WrappedComponent {...props} {...context} />}
    </Consumer>
  );

  return withParendData;
};
