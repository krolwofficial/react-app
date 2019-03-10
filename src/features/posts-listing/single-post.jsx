import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'

const SinglePost = (props) => {
    return (
        <Link to={'post/:' + props.post.id} onClick={() => props.selectPpost(props.post)}>
            <li className="listing_post">
                <img
                    alt={props.post.title}
                    src={`/assets/${props.post.image}.jpeg`}
                    className="listing_post_img"
                />
                <h3 className="listing_post_title">{ props.post.title }</h3>
            </li>
        </Link>
    );
}

SinglePost.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
        hashes: PropTypes.array
    }).isRequired
}

 
function mapDispatchToProps(dispatch) {
    return {
        selectPpost: (post) => {
            dispatch({
                type: 'SELECT_POST',
                payload: post
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(SinglePost);