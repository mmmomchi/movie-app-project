import styles from "./ReviewSection.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function ReviewSection(props) {
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem("Comments")) || []
  );

  const param = useParams();

  const movieComments = comments.filter(
    (comment) => comment.name === param.movieId
  );

  useEffect(() => {
    localStorage.setItem("Comments", JSON.stringify(comments));
  }, [comments]);

  function submitCommentHandler(e) {
    e.preventDefault();

    setComments((prevState) => {
      return [
        { comment: e.target.previousSibling.value, name: props.title },
        ...prevState,
      ];
    });
  }
  function deleteCommentHandler(e) {
    const commentToBeDeleted = e.target.previousSibling.innerText.replace(
      /\s/g,
      ""
    );
    const commentsAfterDeletion = comments.filter((comment) => {
      const objectCommentText = comment.comment.replace(/\s/g, "");
      return objectCommentText !== commentToBeDeleted;
    });
    setComments(commentsAfterDeletion);
  }

  return (
    <div className={styles.review__container}>
      <form className={styles.comment__form__container}>
        <label htmlFor="comment" className={styles.review__heading}>
          Your Review
        </label>
        <textarea
          id="comment"
          className={styles.review__textarea}
          placeholder="Your private notes and comments about the movie..."
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit" onClick={submitCommentHandler}>
          Post Comment
        </button>
      </form>
      <div className={styles.comments__container}>
        {movieComments.map((comment, index) => {
          return (
            <div className={styles.comment} key={index}>
              <p>{comment.comment}</p>
              <button type="button" onClick={deleteCommentHandler}>
                Remove Comment
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReviewSection;
