import { Securityv2 } from "../../icons";
import "./CartSummary.scss";
function CartSummary() {
  return (
    <div className="cartSummary">
      <span className="cartSummary-heading">Sepet Özeti</span>
      <div className="cartSummary-item">
        <span className="cartSummary-item-title">Toplam Fiyat</span>
        <span className="cartSummary-item-value">
          150 <span className="tl">₺</span>
        </span>
      </div>
      <div className="cartSummary-item">
        <span className="cartSummary-item-title">Son Teslim Süresi</span>
        <span className="cartSummary-item-value">23.10.2021</span>
      </div>
      <div className="secure">
        <Securityv2 />
        Ödeme altyapısı güvenli ve şifrelidir
      </div>
    </div>
  );
}

export default CartSummary;
