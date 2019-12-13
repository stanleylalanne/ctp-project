import React from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/postbox.css';
import Navbar from '../components/Navbar';

class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    content: '',
  }

  contentChanged = (event) => {
    this.setState({
      content: event.target.value,
    });
  }

  savePost = (event) => {
    fetch("/api/posts/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: this.state.content,
      }),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }

    return (
      <div className="col-10 col-md-8 col-lg-7 postbox">
        <Navbar/>
        { errorMessage }
        <div className="input-group">
        <section>
      <div class="text">
      <img id="post-creator-img"src="https://i.ibb.co/0Bp7Lk9/testimonials-2.jpg" alt="testimonials-2"/>
        <textarea placeholder="What's in your mind"
        type="text"
        value={this.state.content}
        onChange={this.contentChanged}
        />
      <button className="btn btn-primary" onClick={this.savePost}>Save Post</button>
      </div>
      </section>
      </div>
      </div>
    );
  }
}

export default PostFormPage;