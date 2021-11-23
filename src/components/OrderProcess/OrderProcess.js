import "./OrderProcess.scss";
import { Time, Status1, Status2, Status3 } from "../../icons";
function OrderProcess({ type }) {
  return (
    <div
      className={`orderProcess ${
        type === "1"
          ? "purple"
          : type === "2"
          ? "yellow"
          : type === "3"
          ? "green"
          : "orderProcess"
      }`}
    >
      <span className="orderProcess-title">
        {type === "1"
          ? "Sipariş Başladı"
          : type === "2"
          ? "Mentör çalışmaya başladı"
          : type === "3"
          ? "Mentör çalışmayı teslim etti"
          : "Başlık Yüklenemedi"}
      </span>
      <span className="orderProcess-desc">
        {type === "1"
          ? "Sipariş süresi başladı. Mentör iş ile ilgili bilgilendirildi."
          : type === "2"
          ? "Çalışma süresi başladı. Mentör iş ile ilgili çalışmaya başladı"
          : type === "3"
          ? "Mentör çalışmayı teslim etti. Çalışmayı inceledikten sonra projenize onay verebilirsiniz."
          : "Detay Yüklenemedi"}
      </span>
      <span className="orderProcess-date">
        <Time />
        <span>
          {type === "1"
            ? "13.11.2021 14:52"
            : type === "2"
            ? "14.11.2021 12:22"
            : type === "3"
            ? "15.11.2021 18:31"
            : "Tarih Yüklenemedi"}
        </span>
      </span>
      {type === "1" ? (
        <Status1 />
      ) : type === "2" ? (
        <Status2 />
      ) : type === "3" ? (
        <Status3 />
      ) : (
        "Tarih Yüklenemedi"
      )}
    </div>
  );
}

export default OrderProcess;
