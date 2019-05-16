import React, { Component } from 'react';
import { View,Text,FlatList, TouchableOpacity} from 'react-native';

import { connect } from 'react-redux';
import { getPosts } from '../../actions'

import Header from './Home-Header'
import HomeImage from './Home-Image'
import CommentPart from './Home-Comment'


class Home extends Component {

  state = {
    end: 3
  }

  renderFooter = () => {
    end = this.state.end
    return( 
      <View style={{alignItems:'center', padding:15}}>
        <TouchableOpacity onPress = {() => this.props.getPosts(0, end+3) }>
          <Text>More</Text>
        </TouchableOpacity>
      </View>
      
  
    )    
  } 

  componentDidMount() {
    this.props.getPosts(0,this.state.end)
  }
  render() {
    return (

        <FlatList data = {this.props.posts}
                  keyExtractor = {(item, index) => index.toString()} 
                  renderItem = {({item}) => 
                    <View style={{flex:1}}>

                      <Header userName = "Başak Şanlı" profileImageurl ='http://clipart-library.com/images/BTaroLj5c.png' />
                     
                      <HomeImage imageurl = 'https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=600&h=600&fit=crop'/>

                      <CommentPart comment = {item.title} />

                    </View>
                    
                  }
                  ListFooterComponent = {this.renderFooter()}
        />
      
    );
  }
}

const mapStateToProps = ({ PostsResponse }) => {
  console.log('PostResponse:', PostsResponse)
  return { 
    posts: PostsResponse.posts
    
  }
};
export default connect(mapStateToProps,{ getPosts })(Home);