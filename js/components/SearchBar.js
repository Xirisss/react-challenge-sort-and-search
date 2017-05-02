import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      findName: ''
    }
  }

  render() {
    return (
      <FormControl
        placeholder="Search people by name..."
        value={this.state.findName}
        onChange={ e => {
          this.setState({ findName: e.target.value })
          this.props.findUsers(e.target.value)
        }}
      />
    )
  }
}

export default SearchBar;
