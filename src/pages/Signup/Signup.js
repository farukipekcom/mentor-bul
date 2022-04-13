import "./Signup.scss";
import { Google } from "../../icons";
import { signupBackgroundItem } from "../../images";
import { FormInputTextCard } from "../../components";
import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import slug from "slug";
import moment from "moment";
function Signup() {
  const basarili = () =>
    toast.success("Başarıyla Eklendi!", {
      position: "bottom-center",
    });
  const hatali = () =>
    toast.error("Hata Oluştu!", {
      position: "bottom-center",
    });
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const [formValue, setformValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: 2,
    password: "",
    about: "",
    profilePhoto: "",
    phoneNumber: "",
    city: "",
    country: "",
    createdAt: moment().format("yyyy-MM-DDTHH:mm").toString(),
    updatedAt: moment().format("yyyy-MM-DDTHH:mm").toString(),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginFormData = new FormData();
    loginFormData.append("firstName", formValue.firstName);
    loginFormData.append("lastName", formValue.lastName);
    loginFormData.append("email", formValue.email);
    loginFormData.append("username", formValue.username);
    loginFormData.append("password", formValue.password);
    axios
      .post("https://localhost:5001/api/Users", formValue)
      .then((response) => {
        basarili();
      })
      .catch(function (error) {
        hatali();
      });
  };
  return (
    <div className="login">
      <div className="login-left">
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div className="login-left-container">
            <a href="/" className="login-left-logo">
              MENTÖRBUL
            </a>
            <span className="login-left-desc">
              Sorun yaşadığınız yerde kolaylıkla mentör bulabilir ve aynı
              zamanda ilan da verebilirsiniz!
            </span>
            <div className="login-left-loginGoogle">
              <div className="login-left-loginGoogle-icon">
                <Google />
              </div>
              <div className="login-left-loginGoogle-text">
                Google ile Giriş Yap
              </div>
            </div>
            <span className="login-left-subtitle">
              e-posta adresinizle kayıt yapın
            </span>

            <div className="login-left-fullinput">
              <div className="login-left-input">
                <span className="login-left-input-heading">Adınız *</span>
                <FormInputTextCard
                  placeholder="Adınız"
                  name="firstName"
                  value={formValue.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="login-left-input">
                <span className="login-left-input-heading">Soyadınız *</span>
                <FormInputTextCard
                  placeholder="Soyadınız"
                  name="lastName"
                  value={formValue.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="login-left-input login-left-password">
              <span className="login-left-input-heading">
                Kullanıcı Adınız *
              </span>
              <FormInputTextCard
                placeholder="En az 8 karakter"
                name="username"
                value={formValue.username}
                onChange={handleChange}
              />
            </div>
            <div className="login-left-input login-left-password">
              <span className="login-left-input-heading">
                E-posta Adresiniz *
              </span>
              <FormInputTextCard
                placeholder="mail@mentorbul.com"
                name="email"
                value={formValue.email}
                onChange={handleChange}
              />
            </div>
            <div className="login-left-input login-left-password">
              <span className="login-left-input-heading">Şifre *</span>
              <FormInputTextCard
                placeholder="En az 8 karakter"
                name="password"
                value={formValue.password}
                onChange={handleChange}
              />
            </div>
            <div className="login-left-subinfo">
              <div className="login-left-subinfo-rememberme">
                <label className="custom_checkbox">
                  Beni Hatırla
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="login-left-subinfo-forgetPassword">
                <a href="/forgetpassword">Şifremi Unuttum!</a>
              </div>
            </div>
            <button className="login-left-button">Kayıt Ol</button>
            <div className="login-left-signup">
              Hesabın var mı? <a href="/login">Giriş Yap</a>
            </div>
            <div className="login-left-footer">Mentörbul © 2021</div>
          </div>
        </form>
      </div>
      <div className="login-right">
        <img src={signupBackgroundItem} alt="" />
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default Signup;
