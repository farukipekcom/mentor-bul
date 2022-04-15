import "./Login.scss";
import { Google } from "../../icons";
import { loginBackgroundItem } from "../../images";
import { FormInputTextCard } from "../../components/";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const success = () =>
    toast.success("Giriş Başarılı!", {
      position: "bottom-center",
    });
  const err = () =>
    toast.error("Girdiğiniz bilgiler yanlış!", {
      position: "bottom-center",
    });

  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .get(
        `https://localhost:5001/api/Users/GetUser?email=${email}&password=${password}`
      )
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        success();
        history("/");
      })
      .catch(function (error) {
        err();
      });
  };
  return (
    <div className="login">
      <div className="login-left">
        <form onSubmit={handleSubmit}>
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
                Google ile Kayıt Ol
              </div>
            </div>
            <span className="login-left-subtitle">
              e-posta adresinizle giriş yapın
            </span>
            <div className="login-left-input">
              <span className="login-left-input-heading">E-Posta</span>
              <FormInputTextCard
                placeholder="mail@mentorbul.com"
                name="email"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className="login-left-input login-left-password">
              <span className="login-left-input-heading">Şifre</span>
              <FormInputTextCard
                type="password"
                placeholder="En az 8 karakter"
                name="password"
                value={password}
                onChange={handleChangePassword}
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
            <button type="submit" className="login-left-button">
              Giriş Yap
            </button>
            <div className="login-left-signup">
              Henüz kayıt olmadın mı? <a href="/signup">Yeni Hesap Oluştur</a>
            </div>
            <div className="login-left-footer">Mentörbul © 2022</div>
          </div>
        </form>
      </div>
      <div className="login-right">
        <img src={loginBackgroundItem} alt="" />
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

export default Login;
