import React from "react";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";

const InfoPopOver = props => {
  return (
    <Popover
      open={props.popOverOpen}
      anchorEl={props.anchorEl}
      onClose={props.handlePopOverClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
    >
      {props.data.map(element => {
        const value =
          typeof element.format === "function"
            ? element.format(element.value, "dd MMM, yyyy")
            : element.value;
        const label = element.label ? `${element.label}` : "";
        const str = label ? `${label}: ${value}` : value;

        return (
          <Typography
            variant={"caption"}
            align={"right"}
            style={{ margin: "5px" }}
          >
            {str}
          </Typography>
        );
      })}
    </Popover>
  );
};

export default InfoPopOver;
