import "./CommentCardForm.scss";
import { Star } from "../../icons";
import { FormInputTextareaCard } from "..";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import moment from "moment";
import { Rating } from "react-simple-star-rating";
function CommentCardForm({ project_id, user_id, owner_id, id }) {
  console.log("IIID", id);
  useEffect(() => {
    const fetchItemss = async () => {
      const result = await axios(
        "https://localhost:5001/api/Orders/GetOrderDetails/1"
      );
      setSiparis(result.data);
      console.log("GELEN DATA!!!!!", result.data);
      setYukleniyor(true);
    };
    fetchItemss();
  }, []);
  const [siparis, setSiparis] = useState();
  const [yukleniyor, setYukleniyor] = useState(false);
  console.log("ETIKET", yukleniyor && siparis);
  var yeni = yukleniyor && siparis;
  const updatePost = (e) => {
    yeni.status = id;
    console.log("YENI", yeni);
    console.log("BASILDI");
    axios.put("https://localhost:5001/api/Orders/1", yeni).then((response) => {
      console.log(response.status);
    });
  };
  console.log("!!!!!!", user_id);
  console.log("!!!!!!project_id", project_id);
  const [rating1, setRating1] = useState();
  const [rating2, setRating2] = useState();
  const [rating3, setRating3] = useState();
  const basarili = () =>
    toast.success("Başarıyla Eklendi!", {
      position: "bottom-center",
    });
  const hatali = () =>
    toast.error("Hata Oluştu!", {
      position: "bottom-center",
    });
  const [formValue, setformValue] = useState({
    commentText: "",
    commentDate: moment().format("yyyy-MM-DDTHH:mm").toString(),
    commentRate: "",
    quality: "",
    timing: "",
    communication: "",
    userId: "",
    projectId: "",
    ownerId: "",
  });
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginFormData = new FormData();
    loginFormData.append("commentText", formValue.commentText);
    formValue.quality = rating1;
    loginFormData.append("quality", formValue.quality);
    formValue.timing = rating2;
    loginFormData.append("timing", rating2);
    formValue.communication = rating3;
    loginFormData.append("communication", rating3);
    formValue.commentRate = (rating1 + rating2 + rating3) / 60;
    loginFormData.append("commentRate", formValue.commentRate);
    formValue.userId = user_id;
    loginFormData.append("userId", formValue.userId);
    formValue.projectId = project_id;
    loginFormData.append("projectId", formValue.projectId);
    formValue.ownerId = owner_id;
    loginFormData.append("ownerId", formValue.ownerId);
    axios
      .post("https://localhost:5001/api/Comments", formValue)
      .then((response) => {
        basarili();
        temizle();
      })
      .catch(function (error) {
        hatali();
      });
  };
  const temizle = () => {
    setformValue({
      commentText: "",
      commentDate: moment().format("yyyy-MM-DDTHH:mm").toString(),
      commentRate: "",
      quality: "",
      timing: "",
      communication: "",
      userId: "",
      projectId: "",
    });
    setRating1(0);
    setRating2(0);
    setRating3(0);
  };
  return (
    <form onSubmit={handleSubmit} className="leaveReview">
      <span className="leaveReview-heading">Projeyi Değerlendirin</span>
      <div className="leaveReview-item">
        <span className="leaveReview-item-title">Kalite</span>
        <span className="leaveReview-item-desc">
          Teslim edilen işin kalitesini beğendiniz mi?
        </span>
        <Rating
          onClick={(e) => setRating1(e)}
          ratingValue={rating1}
          size={1}
          transition
          allowHalfIcon
          fullIcon={<Star />}
          emptyIcon={<Star />}
          style={{ marginRight: "4px", marginTop: "4px" }}
        />
      </div>
      <div className="leaveReview-item">
        <span className="leaveReview-item-title">Zamanlama</span>
        <span className="leaveReview-item-desc">
          Kullanıcının işi teslim etme süresini beğendiniz mi?
        </span>
        <Rating
          onClick={(e) => setRating2(e)}
          ratingValue={rating2}
          size={1}
          transition
          allowHalfIcon
          fullIcon={<Star />}
          emptyIcon={<Star />}
          style={{ marginRight: "4px", marginTop: "4px" }}
        />
      </div>
      <div className="leaveReview-item">
        <span className="leaveReview-item-title">İletişim</span>
        <span className="leaveReview-item-desc">
          Kullanıcının iletişiminden memnun kaldınız mı?
        </span>
        <Rating
          onClick={(e) => setRating3(e)}
          ratingValue={rating3}
          size={1}
          transition
          allowHalfIcon
          fullIcon={<Star />}
          emptyIcon={<Star />}
          style={{ marginRight: "4px", marginTop: "4px" }}
        />
      </div>
      <div className="leaveReview-input">
        <FormInputTextareaCard
          placeholder="Yorumunuzu yazınız..."
          name="commentText"
          value={formValue.commentText}
          onChange={handleChange}
        />
        <button type="submit" onClick={updatePost} id="5">
          Gönder
        </button>
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
    </form>
  );
}

export default CommentCardForm;
