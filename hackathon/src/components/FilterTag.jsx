import React from "react";

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
      <form>
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
      </form>
    );
  }
}

export default FilterTag;
