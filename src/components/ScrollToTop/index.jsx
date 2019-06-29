import React from 'react';
import {withRouter} from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    console.log({prevProps})
    console.log(this.props)
    console.log(this.props.location.pathname)
    console.log(prevProps.location.pathname)
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);