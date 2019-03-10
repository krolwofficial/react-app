import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

function PostDetails(props) {
    return (
        <div className="page">
            <div className="post_details">
                <img
                    alt={props.post.title}
                    src={`/assets/${props.post.image}.jpeg`}
                    className="post_details_img"
                />
                <h3 className="post_details_title">{ props.post.title }</h3>
                <p className="post_details_subtitle">{ props.post.subtitle }</p>
                <div className="post_details_author">
                    <img className="post_author_img" src={`/assets/${props.post.author_image}.jpg`} />
                    <p className="post_author_name">{ props.post.author }</p>
                </div>
                <p className="post_details_text">{ props.post.text }</p>
            </div>
        </div>
    )
}
function mapStateToProps(state){
    return {
        post: state.post
    }
}

PostDetails.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        selectPpost: PropTypes.func,
        title: PropTypes.string,
        image: PropTypes.string,
        subtitle: PropTypes.string,
        author: PropTypes.string,
        author_image: PropTypes.string,
        hashes: PropTypes.array,
        text: PropTypes.string,
    }).isRequired
}

export default connect(mapStateToProps)(PostDetails)