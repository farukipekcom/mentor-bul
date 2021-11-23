import "./Signup.scss";
import { Google } from "../../icons";
import { signupBackgroundItem } from "../../images";
import { FormInputTextCard } from "../../components";
function Signup() {
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
              Google ile Giriş Yap
            </div>
          </div>
          <span className="login-left-subtitle">
            e-posta adresinizle kayıt yapın
          </span>

          <div className="login-left-fullinput">
            <div className="login-left-input">
              <span className="login-left-input-heading">Adınız *</span>
              <FormInputTextCard placeholder="Adınız" />
            </div>
            <div className="login-left-input">
              <span className="login-left-input-heading">Soyadınız *</span>
              <FormInputTextCard placeholder="Soyadınız" />
            </div>
          </div>

          <div className="login-left-input login-left-password">
            <span className="login-left-input-heading">Kullanıcı Adınız *</span>
            <FormInputTextCard placeholder="En az 8 karakter" />
          </div>
          <div className="login-left-input login-left-password">
            <span className="login-left-input-heading">
              E-posta Adresiniz *
            </span>
            <FormInputTextCard placeholder="mail@mentorbul.com" />
          </div>
          <div className="login-left-input login-left-password">
            <span className="login-left-input-heading">Şifre *</span>
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
          <div className="login-left-button">Kayıt Ol</div>
          <div className="login-left-signup">
            Hesabın var mı? <a href="/login">Giriş Yap</a>
          </div>
          <div className="login-left-footer">Mentörbul © 2021</div>
        </div>
      </div>
      <div className="login-right">
        <img src={signupBackgroundItem} alt="" />
      </div>
    </div>
  );
}

export default Signup;
