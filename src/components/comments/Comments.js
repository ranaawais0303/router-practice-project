import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  /////use Params////////////////
  const params = useParams();
  const { quoteId } = params;

  ////custom hook//////////////////
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  /////////useEffect//////////////////
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  /////////////start Add Comment Handler show form//////////////
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  /////////////add comment function.////////
  const addedCommentHandler = () => {};

  //////////////////work on comments conditions
  let comments;

  ////////check if status is pending then show spinner///
  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  /////////check status completed///////////////////
  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }
  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No Comments were added yet!</p>;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      <p>{comments}</p>
    </section>
  );
};

export default Comments;
