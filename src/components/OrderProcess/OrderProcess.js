import "./OrderProcess.scss";
import { Time, Status1, Status2, Status3 } from "../../icons";
import { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/tr";
function OrderProcess() {
  const [order, setOrder] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        "https://localhost:5001/api/Orderlog/GetOrderLogDetails/1"
      );
      setOrder(result.data);
      console.log("LOG", result.data);
      setIsLoading(true);
    };
    fetchItems();
  }, []);
  return (
    <>
      {isLoading &&
        order.map((item) => (
          <>
            <div
              className={`orderProcess ${
                item.status === 1
                  ? "purple"
                  : item.status === 2
                  ? "yellow"
                  : item.status === 3
                  ? "green"
                  : "orderProcess"
              }`}
            >
              <span className="orderProcess-title">
                {item.status === 1
                  ? "Sipariş Başarıyla Oluşturuldu!"
                  : item.status === 2
                  ? "Mentör çalışmaya başladı!"
                  : item.status === 3
                  ? "Mentör çalışmayı teslim etti!"
                  : ""}
              </span>
              {/* <span className="orderProcess-desc">
                {item.status === 1
                  ? "Siparişiniz başarıyla oluşturuldu."
                  : item.status === 2
                  ? "Mentör iş başlangıcını onayladı."
                  : item.status === 3
                  ? "Mentör çalışmayı teslim etti. Çalışmayı inceledikten sonra projenize onay verebilirsiniz."
                  : "Detay Yüklenemedi"}
              </span> */}
              <span className="orderProcess-date">
                <Time />
                <span>
                  {item.status === 1 ? (
                    <Moment format="DD MMMM YYYY hh:mm" locale="tr">
                      {item.date}
                    </Moment>
                  ) : item.status === 2 ? (
                    <Moment format="DD MMMM YYYY hh:mm" locale="tr">
                      {item.date}
                    </Moment>
                  ) : item.status === 3 ? (
                    <Moment format="DD MMMM YYYY hh:mm" locale="tr">
                      {item.date}
                    </Moment>
                  ) : (
                    "Tarih Yüklenemedi"
                  )}
                </span>
              </span>
            </div>
          </>
        ))}
    </>
  );
}

export default OrderProcess;
