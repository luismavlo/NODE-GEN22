import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginThunk } from "./../../store/slices/user.slice";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleSubmit, reset, register } = useForm();

  const submit = (data) => {
    dispatch(loginThunk(data));
    navigate("/");
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <form className="login__form" onSubmit={handleSubmit(submit)}>
        <div className="login__section">
          <label className="login__label" htmlFor="email">
            Email
          </label>
          <input
            className="login__input"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>
        <div className="login__section">
          <label className="login__label" htmlFor="password">
            Password
          </label>
          <input
            className="login__input"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>
        <button className="login__btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
