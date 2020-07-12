import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/Chat';


export default function Comment(props) {
  const [changeState, changeAdd] = useState(false);
  const [isdislike, setDislike] = useState(false);
  const [isLiked, setLike] = useState(false);
  const [inputData, setinputData] = useState(props.comment);
  console.log(props);

  return (
    <div className="comment">
      <div className="commentField">

        {changeState ? (
          <>
            <input
              onChange={(e) => {
                setinputData(e.target.value);
              }}
              value={inputData}
              type="text"
              style={{ border: 'none' }}
            />{' '}
            <button className="changeBtn"
              onClick={() => {
                props.editText(props.id, inputData);
                changeAdd(false);
              }}>
              Внести изменения
            </button>
          </>
        ) : (
            <>
              {props.comment}{' '}
              <ChatIcon
                onClick={() => {
                  changeAdd(true);
                }} style={{ cursor: 'pointer' }}
              />
            </>
          )}
        <div className="commentData"> Дата: {props.data}</div>
      </div>
      <div className="likes">
        <div className="like">
          <button
            onClick={() => {
              if (!isdislike && !isLiked) {
                props.likeAdd(props.id, 1);
                setLike(true);
              }
              if (!isdislike && isLiked) {
                setLike(false);
                props.likeAdd(props.id, -1);
              }
              if (isdislike && !isLiked) {
                props.dislikeAdd(props.id, -1);
                props.likeAdd(props.id, 1);
                setDislike(false);
                setLike(true);
              }
            }}>
            <ThumbUpIcon color="primary" />
          </button>
          {props.like}
        </div>
        <div className="disLike">
          <button
            onClick={() => {
              if (!isdislike && !isLiked) {
                props.dislikeAdd(props.id, 1);
                setDislike(true);
              }
              if (!isdislike && isLiked) {
                props.likeAdd(props.id, -1);
                props.dislikeAdd(props.id, 1);
                setDislike(true);
                setLike(false);
              }
              if (isdislike && !isLiked) {
                props.dislikeAdd(props.id, -1);
                setDislike(false);
              }
            }}>
            <ThumbDownAltIcon color="secondary" />
          </button>

          {props.dislike}
        </div>
        <div className="closeIcon"
          onClick={() => {
            props.deleteComment(props.id);
          }}
        >
          <CloseIcon />
        </div>
      </div>
    </div>
  );
}