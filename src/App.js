import React, { useEffect, useState } from "react";
import {
  getCommentsApi,
  createCommentApi,
  editCommentApi,
  deleteCommentAPi,
} from "./api/getComments.js";
import { Comments } from "easy-comments";

function App() {
  const [commentsList, setCommentsList] = useState([]);
  const [currentUser, setCurrentUser] = useState("1");

  const addComment = (text, parentId) => {
    return createCommentApi(text, parentId).then((comment) => {
      setCommentsList([comment, ...commentsList]);
    });
  };

  const deleteComment = (commentId) => {
    if (window.confirm("are you sure you want to remove this comment")) {
      return deleteCommentAPi(commentId).then(() => {
        const updatedCommentList = commentsList.filter(
          (comments) => comments.id !== commentId
        );
        setCommentsList(updatedCommentList);
      });
    }
  };

  const updateComment = (text, commentId) => {
    return editCommentApi(text, commentId).then(() => {
      const updatedComment = commentsList.map((commentUpdate) => {
        if (commentUpdate.id === commentId) {
          console.log(commentUpdate.id, commentId, "3456789rtyui");
          return { ...commentUpdate, comment: text };
        }
        return commentUpdate;
      });
      setCommentsList(updatedComment);
    });
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setCommentsList(data);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <h3 className="comments-title">Comments (user looged in)</h3>
        <Comments
          currentUserId={currentUser}
          commentsList={commentsList}
          addComment={addComment}
          deleteComment={deleteComment}
          updateComment={updateComment}
        />
      </div>

      <div className="under-line"></div>
      <div>
        <h3 className="comments-title">Comments (User not logged in)</h3>
        <Comments
          currentUserId={null}
          commentsList={commentsList}
          addComment={addComment}
          deleteComment={deleteComment}
          updateComment={updateComment}
        />
      </div>
    </div>
  );
}

export default App;
