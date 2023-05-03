import { useForm } from "react-hook-form";
import './register.css'

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profileImgUrl", data.profileImgUrl);
    reset({
      name: "",
      email: "",
      password: "",
      profileImgUrl: "",
    });
    // Se envía todo en formato FormData al backend
  };

  return (
    <div className="register">
      <h1 className="register__title">Create a new User</h1>
      <form className="register__form" onSubmit={handleSubmit(submit)}>
        <div className="register__section">
          <label className="register__label" htmlFor="name">
            Name
          </label>
          <input
            className="register__input"
            {...register("name")}
            type="text"
            id="name"
          />
        </div>
        <div className="register__section">
          <label className="register__label" htmlFor="email">
            Email
          </label>
          <input
            className="register__input"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>
        <div className="register__section">
          <label className="register__label" htmlFor="password">
            Password
          </label>
          <input
            className="register__input"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>
        <div className="register__section">
          <label for='archivo' className="register__label" htmlFor="imgProfile">
            Avatar Profile
          </label>
          <input
            name="archivo"
            className="register__input"
            {...register("profileImgUrl")}
            type="file"
            id="imgProfile"
          />
        </div>
        <button className="register__btn">Submit</button>
      </form>
    </div>
  );
};

export default Register;
