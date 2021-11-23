import "./Login.scss";
import { Google } from "../../icons";
import { loginBackgroundItem } from "../../images";
import { FormInputTextCard } from "../../components/";
function Login() {
  return (
    <div className="login">
      <div className="login-left">
        <div className="login-left-container">
          <a href="/" className="login-left-logo">
            MENTÖRBUL
          </a>
          <span className="login-left-desc">
            Sorun yaşadığınız yerde kolaylıkla mentör bulabilir ve aynı zamanda
            ilan da verebilirsiniz!
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
            <FormInputTextCard placeholder="mail@mentorbul.com" />
          </div>
          <div className="login-left-input login-left-password">
            <span className="login-left-input-heading">Şifre</span>
            <FormInputTextCard placeholder="En az 8 karakter" />
          </div>
          <div className="login-left-subinfo">
            <div className="login-left-subinfo-rememberme">
              <label className="custom_checkbox">
                Beni Hatırla
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="login-left-subinfo-forgetPassword">
              <a href="/forgetpassword">Şifremi Unuttum!</a>
            </div>
          </div>
          <div className="login-left-button">Giriş Yap</div>
          <div className="login-left-signup">
            Henüz kayıt olmadın mı? <a href="/signup">Yeni Hesap Oluştur</a>
          </div>
          <div className="login-left-footer">Mentörbul © 2021</div>
        </div>
      </div>
      <div className="login-right">
        <img src={loginBackgroundItem} alt="" />
      </div>
    </div>
  );
}

export default Login;
