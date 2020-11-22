import React from "react";
import styled from "styled-components";

const Form = styled.button`
  font-size: 14px;
  color: white;
  border: none;
  width: 250px;
  height: 24px;
  margin-bottom: 30px;
`;

class FilterTag extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(document.getElementById("tag").value);
    document.getElementById("tag").value = "";
  }

  render() {
    return (
      <Form>
        <input
          type="text"
          placeholder="Type a hobby"
          id="tag"
          name="tagInput"
        ></input>
        <button type="button" onClick={this.handleClick}>
          Add
        </button>
        <div>
          {this.props.tagArr.map((itemTag) => (
            <button>{itemTag}</button>
          ))}
        </div>
      </Form>
    );
  }
}

export default FilterTag;
