import "./PaymentForm.scss";
import { CreditCard } from "../../icons";
import { FormInputTextCard } from "..";
import { payment } from "../../images";
function PaymentForm({ updatePost, price }) {
  return (
    <div className="paymentForm">
      <div className="paymentForm-heading">
        <CreditCard />
        <span className="paymentForm-heading-title">Ödemeyi Tamamla</span>
      </div>
      <div className="paymentForm-form">
        <div className="paymentForm-form-left">
          <div className="paymentForm-form-left-item">
            <span className="paymentForm-form-left-item-title">
              Kart Üzerindeki İsim *
            </span>
            <FormInputTextCard placeholder="Kart Üzerindeki İsim *" />
          </div>
          <div className="paymentForm-form-left-item">
            <span className="paymentForm-form-left-item-title">
              Kart Numarası *
            </span>
            <FormInputTextCard placeholder="Kart Numarası *" />
          </div>
          <div className="paymentForm-form-left-item">
            <div className="paymentForm-form-left-item-full">
              <div className="paymentForm-form-left-item-left">
                <span className="paymentForm-form-left-item-title">
                  Son Kullanım Tarihi *
                </span>
                <div className="paymentForm-form-left-item-full">
                  <select name="" id="" className="inputCustom-input">
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                  </select>
                  <select name="" id="" className="inputCustom-input">
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                  </select>
                </div>
              </div>
              <div className="paymentForm-form-left-item-right">
                <span className="paymentForm-form-left-item-title">CVV *</span>
                <FormInputTextCard placeholder="CVV" />
              </div>
            </div>
          </div>
          <button id="2" onClick={updatePost}>
            Ödeme Yap ({price}
            <span className="tl">TL</span>)
          </button>
        </div>
        <div className="paymentForm-form-right">
          <img src={payment} alt="" className="paymentForm-form-right-photo" />
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
