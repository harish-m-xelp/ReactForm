import React from "react";
import styles from "../components/form.module.css";
import InputLabel from "./inputLabel";
import Button from "./button";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      age: "",
      gender: ""
    };
  }

  updateField = e => {
    const name = e.target.getAttribute("name");
    this.setState({
      [name]: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    let person;
    if (
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.age === ""
    ) {
      alert("Enter All mandatory fields");
    } else {
      person = {
        email: this.state.email,
        password: this.state.password,
        age: this.state.age
      };
    }
    console.log(person);
  };

  resetForm = e => {
    e.preventDefault();
    let person;
    person = {
      email: "",
      password: "",
      age: ""
    };
    console.log(person);
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.myform}>Sign-up Form : </div>
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <div>Email:</div>
              <br />
              <InputLabel
                name={"email"}
                type={"email"}
                placeholder={"Enter your Email"}
                onChange={this.updateField}
              />{" "}
              <br /> <br />
              <div>Password:</div> <br />
              <InputLabel
                name={"password"}
                type={"password"}
                placeholder={"Enter your Password"}
                onChange={this.updateField}
              />{" "}
              <br /> <br />
              <div>Age: </div>
              <br />
              <InputLabel
                name={"age"}
                placeholder={"Enter your Age"}
                onChange={this.updateField}
              />{" "}
              <br /> <br />
              <div>Gender:</div> <br />
              <div className={styles.submit}>
                <input type="radio" />
                male
                <input type="radio" />
                female
                <input type="radio" />
                others <br /> <br />
              </div>
              <Button
                name={"submit"}
                type={"submit"}
                value={"Submit"}
                onClick={this.submitForm}
              />
              <Button
                name={"reset"}
                type={"reset"}
                value={"Reset"}
                backgroundColor={"#928605"}
                onClick={this.resetForm}
              />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
