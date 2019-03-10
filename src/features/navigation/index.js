import React, { Component } from 'react';
import style from 'styled-components'
import {NavLink} from 'react-router-dom'
//import {connect} from 'react-redux'
//import style from 'styled-components'



class Navigation extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         hashes: []
    //     }
    // }

    // componentDidMount(){
    //     this.props.posts.map(post => {
    //       //console.log(...post.hashes)

    //       post.hashes.forEach(hash => {
    //         if(this.state.hashes.indexOf(hash) == -1){
    //             console.log(hash + ' exist')
    //             this.setState({
    //                 hashes: hash
    //             })
    //         }else {
    //             console.log(hash + ' not exist')
    //         }
    //       });

    //     });

    //     this.setState({
    //         hashes: 'test-01'
    //     });

    //     console.log(this.state.hashes)
    // }

    render() { 
        return (
            <nav className="nav">
              <h1><NavLink to="/">The Fortnighly</NavLink></h1>
              <ul className="hash_list">
                {
                  // props.posts.map(post => {
                  //   post.hashes
                  // });
                }
                <li className="hash_item">
                    #hash1
                </li>
                <li className="hash_item">
                    #hash2
                </li>
                <li className="hash_item">
                    #hash3
                </li>
                
              </ul>
            </nav>
          );
    }
}


// function mapStateToProps(state){
//     return {
//         posts: state.posts
//     }
// }

// export default connect(mapStateToProps)(Navigation)
export default Navigation