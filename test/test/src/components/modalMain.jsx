// ModalMain

import React, { useState } from "react";
import styled from "styled-components";
import ModalContent from "./ModalContent";
import Close from "../../Icon/Close";
import Upload from "../../Icon/Upload";
import ReviewComment from "../MealReview/ReviewComment";

function ModalMain({ title, closeModal, starRating, CommentOpen }) {
  const [isReviewOpen, setIsReviewOpen] = useState(true);

  // chu jonna gui chan a seo mi an hae
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  const [inputFocused, setInputFocused] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState([]);
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const commentDate = `${year}.${month}.${day} ${hour}:${minute}`;

  const handleInputButton = () => {
    return commentValue !== ""
      ? inputFocused
        ? "#FE6B01"
        : "#c9cad0"
      : "#c9cad0";
  };

  const handleCommentSubmit = () => {
    if (commentValue.trim() !== "") {
      const newComment = {
        nickName: "영양사 선생님",
        uploadtime: commentDate,
        contents: commentValue,
      };

      setComments((prevComments) => [...prevComments, newComment]);

      setCommentValue("");
    }
  };

  return (
    <Background onClick={handleBackgroundClick}>
      {isReviewOpen && (
        <Container>
          <HeaderContainer>
            <BlankBox />
            <HeaderTitle>{title}</HeaderTitle>
            <Close closeModal={closeModal} />
          </HeaderContainer>
          <Box>
            <MainBox>
              {starRating}
              <ModalContent
                contents={"프로젝트가 친절하고 PM이 맛있어요\nGood"}
                nickname={"이태영"}
                date={"23.05.07 10:32"}
              />
            </MainBox>
            {CommentOpen && <ReviewComment props={comments} />}
          </Box>
          <CommentInputContainer>
            <CommentInputBox inputFocused={inputFocused}>
              <CommentInput
                maxLength={100}
                placeholder="댓글을 입력해주세요"
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleCommentSubmit();
                  }
                }}
              />
            </CommentInputBox>
            <UploadButton style={{ backgroundColor: handleInputButton() }}>
              <Upload />
            </UploadButton>
          </CommentInputContainer>
        </Container>
      )}
    </Background>
  );
}

export default ModalMain;
