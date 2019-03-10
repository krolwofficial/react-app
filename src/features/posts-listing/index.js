import React from 'react';
import SinglePost from './single-post.jsx'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const PostsListing = (props) => {
    return (
        <div className="page">
            <ul className="posts_list">
                {
                    props.posts.map( post => {
                        return(
                            <SinglePost key={post.id} post={post} />
                        )
                    })
                }
            </ul>
        </div>
    );
}

PostsListing.propTypes = {
    posts: PropTypes.array
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsListing)