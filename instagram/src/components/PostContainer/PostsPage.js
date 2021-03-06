import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import PropTypes from 'prop-types';

import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      term: ""
    }
  }


  searchPosts = (event) => {
      const term = event.target.value;
      console.log(typeof term);
      if(term === '') {
        this.setState({
          data: dummyData,
          term: term
        });
      }

      const newList = this.state.data.filter(post => post.username === term);

      if(newList.length === 0) {
        return;
      }


      console.log(term)
      this.setState({
        data: newList,
        term: term
      })
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          data: dummyData})
      }, 1000)
    }

  render() {
    const spinnerStyle = {
      width: '15rem',
      height: '15rem'
    }


    return(
      <div className="posts-page">
        <SearchBar data={this.state.data}
                   searchHandler={this.searchPosts}
                   logout={this.props.logout}
                   term={this.state.term}
                   />

        { this.state.data.length === 0 ?  <div className="d-flex justify-content-center" id="spinner">
                                            <div className="spinner-border" style={spinnerStyle} role="status"></div>
                                          </div>
                                          : this.state.data.map(obj => <PostContainer key={Math.random()}
                                                            user={obj.username}
                                                            thumbnail={obj.thumbnailUrl}
                                                            image={obj.imageUrl}
                                                            time={obj.timestamp}
                                                            likes={obj.likes}
                                                            comments={obj.comments}/>)}
      </div>
    );
  }
}

PostsPage.propTypes = {
  logout: PropTypes.func,
}

export default PostsPage;
