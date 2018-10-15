import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps) => (Component) => {
  return class extends React.Component {
    static get displayName() { return `${Component.name}Container`; }
    static get contextTypes() {
      return ({
        store: PropTypes.object
      });
    }

    render() {
      return <Component {...this.props}
        {...extraProps(this.context.store, this.props)}
        store={this.context.store} />;
    }
  };

};

export default storeProvider;
