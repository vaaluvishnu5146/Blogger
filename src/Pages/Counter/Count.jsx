import React from "react";
import PropTypes from "prop-types";

class Count extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.count}</h1>;
  }
}

export default Count;

Count.propTypes = {
  count: PropTypes.number.isRequired,
};
