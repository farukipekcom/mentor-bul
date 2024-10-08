import "./CommentCard.scss";
import { Reliability, Communication, Timing, Star } from "../../icons";
import { Loading } from "../";
import Moment from "react-moment";
import "moment/locale/tr";
import { Rating } from "react-simple-star-rating";
import { useState, useEffect } from "react";
import axios from "axios";
function CommentCard({ user_id, username }) {
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState();
  const [comment, setComment] = useState();
  const [count, setCount] = useState();
  const [timing, setTiming] = useState();
  const [quality, setQuality] = useState();
  const [communication, setCommunication] = useState();
  const [total, setTotal] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  useEffect(() => {
    const fetchComments = async () => {
      const result = await axios(
        `https://localhost:5001/api/Comments/GetCommentList/${user_id}`
      );
      setComment(result.data);
      setCount(result.data.length);
      setIsLoading(true);
    };
    const fetchTags = async () => {
      const result = await axios("https://localhost:5001/api/tags");
      setTags(result.data);
      setIsLoading2(true);
    };
    fetchComments();
    fetchTags();
    var totalQuality =
      isLoading &&
      comment.reduce(function (accumulator, item) {
        return accumulator + item.quality;
      }, 0);
    var totalTiming =
      isLoading &&
      comment.reduce(function (accumulator, item) {
        return accumulator + item.timing;
      }, 0);
    var totalCommunication =
      isLoading &&
      comment.reduce(function (accumulator, item) {
        return accumulator + item.communication;
      }, 0);
    setQuality(totalQuality / 20 / count);
    setTiming(totalTiming / 20 / count);
    setCommunication(totalCommunication / 20 / count);
    setTotal(
      Number(isLoading && (quality + timing + communication) / 3).toFixed(2)
    );
  }, [isLoading, isLoading2, quality]);
  const handleRating = (rate) => {
    setRating(rate / 20);
  };
  return (
    <div className="commentCard">
      {isLoading ? (
        <>
          <h3 className="commentCard-heading">
            {username} hakkında değerlendirmeler
          </h3>
          {comment.length > 0 ? (
            <div className="commentCard-summary">
              <div className="commentCard-summary-boxes">
                <div className="commentCard-summary-boxes-box">
                  <div className="commentCard-summary-boxes-box-icon">
                    <Reliability />
                  </div>
                  <span className="commentCard-summary-boxes-box-title">
                    Güvenilirlik
                  </span>
                  <div className="commentCard-summary-boxes-box-rating">
                    <Rating
                      onClick={handleRating}
                      ratingValue={rating}
                      size={5}
                      transition
                      allowHalfIcon
                      fullIcon={<Star />}
                      emptyIcon={<Star />}
                      style={{ marginRight: "4px" }}
                      initialValue={Math.round(quality * 2) / 2}
                      readonly={true}
                    />
                  </div>
                </div>
                <div className="commentCard-summary-boxes-box">
                  <div className="commentCard-summary-boxes-box-icon">
                    <Timing />
                  </div>
                  <span className="commentCard-summary-boxes-box-title">
                    Zamanlama
                  </span>
                  <div className="commentCard-summary-boxes-box-rating">
                    <Rating
                      onClick={handleRating}
                      ratingValue={rating}
                      size={5}
                      transition
                      allowHalfIcon
                      fullIcon={<Star />}
                      emptyIcon={<Star />}
                      style={{ marginRight: "4px" }}
                      initialValue={Math.round(timing * 2) / 2}
                      readonly={true}
                    />
                  </div>
                </div>
                <div className="commentCard-summary-boxes-box">
                  <div className="commentCard-summary-boxes-box-icon">
                    <Communication />
                  </div>
                  <span className="commentCard-summary-boxes-box-title">
                    İletişim
                  </span>
                  <div className="commentCard-summary-boxes-box-rating">
                    <Rating
                      onClick={handleRating}
                      ratingValue={rating}
                      size={5}
                      transition
                      allowHalfIcon
                      fullIcon={<Star />}
                      emptyIcon={<Star />}
                      style={{ marginRight: "4px" }}
                      initialValue={Math.round(communication * 2) / 2}
                      readonly={true}
                    />
                  </div>
                </div>
                <div className="commentCard-summary-boxes-box">
                  <span className="commentCard-summary-boxes-box-text">
                    Toplam <br />
                    <span>{isLoading && comment.length} değerlendirme</span>
                  </span>
                  <span className="commentCard-summary-boxes-box-sum">
                    {total}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h2
                style={{
                  marginTop: "12px",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Henüz Değerlendirme yapılmadı.
              </h2>
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
      <div className="commentCard-list">
        {isLoading &&
          comment.map((item, index) => (
            <div className="commentCard-list-item" key={index}>
              <div className="commentCard-list-item-left">
                <div className="commentCard-list-item-left-container">
                  <img src={item.user.profilePhoto} alt="" />
                  <div className="commentCard-list-item-left-profile">
                    <div className="commentCard-list-item-left-profile-name">
                      {item.user.firstName} {item.user.lastName}
                    </div>
                    <div className="commentCard-list-item-left-profile-location">
                      {item.user.city}, {item.user.country}
                    </div>
                  </div>
                </div>
                <a
                  href={`../project/${item.project.slug}`}
                  className="commentCard-list-item-right-category-name"
                >
                  <div className="commentCard-list-item-right-category">
                    <span className="commentCard-list-item-right-category-heading">
                      Proje Adı:
                    </span>

                    <span>{item.project.title}</span>
                  </div>
                </a>
              </div>
              <div className="commentCard-list-item-right">
                <div className="commentCard-list-item-right-info">
                  <Rating
                    onClick={handleRating}
                    ratingValue={rating}
                    size={5}
                    transition
                    allowHalfIcon
                    fullIcon={<Star />}
                    emptyIcon={<Star />}
                    style={{ marginRight: "4px" }}
                    initialValue={item.commentRate}
                    readonly={true}
                  />
                  <span className="commentCard-list-item-right-info-date">
                    <Moment format="DD MMMM YYYY - hh:mm" locale="tr">
                      {item.commentDate}
                    </Moment>
                  </span>
                </div>
                <div className="commentCard-list-item-right-text">
                  {item.commentText}
                </div>
                <div className="commentCard-list-item-right-tags">
                  {isLoading &&
                    item.project.tagsId.split(",").map(
                      (items) =>
                        isLoading2 &&
                        tags
                          .filter((itemss) => itemss.tagId === parseInt(items))
                          .map((tag) => (
                            <div
                              className="commentCard-list-item-right-tags-item"
                              key={index}
                            >
                              <a href={`../tags/${tag.slug}`}>{tag.name}</a>
                            </div>
                          ))
                    )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CommentCard;
