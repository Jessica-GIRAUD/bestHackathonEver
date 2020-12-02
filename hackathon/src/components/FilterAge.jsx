import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 240,
    color: "#ffffff",
    margin: 90,
  },
});

function valuetext(value) {
  return `${value}years old`;
}

export default function RangeSlider(props) {
  const classes = useStyles();
  const { onChange } = props;
  return (
    <div>
      <div className={classes.root}>
        <Typography id="range-slider" gutterBottom></Typography>
        <p>18 years old</p>
        <Slider
          defaultValue={[0, 100]}
          onChange={onChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
        <p>100</p>
      </div>
    </div>
  );
}
