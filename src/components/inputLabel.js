import React from "react";
import styles from "../components/inputLabel.module.css";

const InputLabel = props => {
  return (
    <React.Fragment>
      <input
        className={styles.inputBox}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
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

export default InputLabel;
