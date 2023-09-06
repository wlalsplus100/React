// ReviewComment

import React, { useState } from "react";
import styled from "styled-components";
import Comment from "../Comment";

function ReviewComment(props) {
  const [comments, setComments] = useState(props);

  return (
    <>
      <CommentContainer>
        <CommentBlock>
          {comments.map((comment, index) => (
            <Comment
              key={index}
              nickName={comment.nickName}
              uploadtime={comment.uploadtime}
              contents={comment.contents}
            />
          ))}
        </CommentBlock>
      </CommentContainer>
    </>
  );
}

export default ReviewComment;

const CommentContainer = styled.div`
  display: flex;
  padding: 0px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
  height: 262px;
`;

const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`;
