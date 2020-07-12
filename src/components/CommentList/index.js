import React, { Component } from 'react';
import Comment from './Comment';
import Button from "@material-ui/core/Button";

export default class CommentsList extends Component {
  state = {
    comments: [
      {
        id: 0,
        comment: 'Первый комментарий',
        data: new Date().toLocaleString(),
        like: 0,
        dislike: 0,
      },
    ],
    textArea: '',
    error: false,
  };

  likeAdd = (id, like) => {
    this.setState({
      comments: this.state.comments.map((el) => {
        if (id === el.id) {
          return { ...el, like: (el.like += like) };
        }
        return el;
      }),
    });
  };

  dislikeAdd = (id, dislike) => {
    this.setState({
      comments: this.state.comments.map((el) => {
        if (id === el.id) {
          return { ...el, dislike: (el.dislike += dislike) };
        }
        return el;
      }),
    });
  };

  textareaChange = (e) => {
    this.setState({
      textArea: e.target.value,
    });
  };

  addComment = () => {
    if (this.state.textArea == '') {
      this.setState({
        error: true,
      });
      return;
    } else {
      let id = Math.random() * 100;
      this.setState({
        comments: [
          ...this.state.comments,
          {
            id: id,
            comment: this.state.textArea,
            data: new Date().toLocaleString(),
            like: 0,
            dislike: 0,
          },
        ],
      });
      this.setState({
        textArea: '',
      });
    }
  };

  deleteComment = (id) => {
    this.setState({
      comments: [
        ...this.state.comments.filter((el) => {
          if (id === el.id) {
            return false;
          }
          return true;
        }),
      ],
    });
  };

  editText = (id, text) => {
    this.setState({
      comments: [
        ...this.state.comments.map((el) => {
          if (el.id === id) {
            return { ...el, comment: text };
          } else {
            return el;
          }
        }),
      ],
    });
  };

  render() {
    let comments = this.state.comments.map((el, i) => (
      <Comment
        dislikeAdd={this.dislikeAdd}
        deleteComment={this.deleteComment}
        likeAdd={this.likeAdd}
        editText={this.editText}
        key={i}
        {...el}
      />
    ));

    return (
      <div>
        {<h2>Комментарии</h2>}
        {comments}
        <div>
          <div>
            <h3>Добавить комментарий:</h3>
            <textarea
              value={this.state.textArea}
              onChange={(e) => {
                this.textareaChange(e);
              }}></textarea>
          </div>
          {this.state.error && <div style={{ color: 'red' }}>Поле комментария пусто</div>}
          <Button variant="contained" color="primary"
            onBlur={() => {
              this.setState({
                error: false,
              });
            }}
            onClick={() => {
              this.addComment();
            }}>
            Добавить комментарий
          </Button>
        </div>
      </div>
    );
  }
}