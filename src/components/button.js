import React from "react";
import styles from "../components/button.module.css";

const Button = props => {
  return (
    <React.Fragment>
      <input
        className={styles.buttonTxt}
        name={props.name}
        type={props.type}
        value={props.value}
        onClick={props.onClick}
        style={{
          width: props.width,
          padding: props.padding,
          borderRadius: props.borderRadius,
          fontSize: props.fontSize,
          backgroundColor: props.backgroundColor
        }}
      />
    </React.Fragment>
  );
};

export default Button;
