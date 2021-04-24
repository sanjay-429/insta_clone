import React from "react";

import { ContextProvider } from "../Global/Context";

const Model = () => {
  const { model, closeModel, register, login } = React.useContext(
    ContextProvider
  );
  const [state, setState] = React.useState({
    register: true,
    login: false
  });
  const [inputs, setInput] = React.useState({
    username: "",
    email: "",
    password: ""
  });
  const handleInput = (e) => {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  };

  const formsToggle = () => {
    setState({
      ...state,
      register: !state.register,
      login: !state.login
    });
  };
  const closeForm = (e) => {
    const className = e.target.getAttribute("class");
    if (className === "model") closeModel();
  };
  const registerUser = (e) => {
    //    refresh behaviour stop;
    e.preventDefault();

    console.log(inputs);
    register(inputs);
    setInput({ username: "", email: "", password: "" });
  };
  const userLogin = (e) => {
    e.preventDefault();
    login(inputs);
  };
  return (
    <>
      {/* if click outside form then form will be closed so classname model will write code */}
      {model ? (
        <div className="model" onClick={closeForm}>
          <div className="model_container">
            {state.register ? (
              <div className="model_form">
                <form onSubmit={registerUser}>
                  <div className="model_group">
                    <img src="/images/logowrite.png" alt="imgloaded" />
                  </div>
                  <div className="model_group">
                    <input
                      type="text"
                      name="username"
                      className="model_input"
                      placeholder="Username"
                      onChange={handleInput}
                      value={inputs.username}
                      required
                    />
                  </div>
                  <div className="model_group">
                    <input
                      type="email"
                      name="email"
                      className="model_input"
                      placeholder="Email"
                      onChange={handleInput}
                      value={inputs.email}
                      required
                    />
                  </div>
                  <div className="model_group">
                    <input
                      type="password"
                      name="password"
                      className="model_input"
                      placeholder="Create password"
                      onChange={handleInput}
                      value={inputs.password}
                      required
                    />
                  </div>
                  <div className="model_group">
                    <input
                      type="submit"
                      value="Register"
                      className="btn btn-smart"
                    />
                  </div>
                  <div className="model_group">
                    <span onClick={formsToggle}>Already have an account ?</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="model_form">
                <form onSubmit={userLogin}>
                  <div className="model_group">
                    <img src="/images/logowrite.png" alt="images loaded" />
                  </div>

                  <div className="model_group">
                    <input
                      type="email"
                      name="email"
                      className="model_input"
                      placeholder="Email"
                      onChange={handleInput}
                      value={inputs.email}
                      required
                    />
                  </div>
                  <div className="model_group">
                    <input
                      type="password"
                      name="password"
                      className="model_input"
                      placeholder="Current password"
                      onChange={handleInput}
                      value={inputs.password}
                    />
                  </div>
                  <div className="model_group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-smart"
                    />
                  </div>
                  <div className="model_group">
                    <span onClick={formsToggle}>Create a new account?</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      ;
    </>
  );
};

export default Model;
