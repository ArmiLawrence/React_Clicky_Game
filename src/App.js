import React from 'react';
import './App.css';
import FriendCard from "./components/FriendCard/friendCard.js";
import Wrapper from "./components/Wrapper/wrapper.js";
import Title from "./components/Title/Title.js";
import friends from "./friends.json";


class App extends React.Component {

  state = {
    friends,
    score: 0,
    highScore: 6,
    clickedFriend: [],
    gamePlay: "",
  }


  clickFriend = id => {

    let clickedFriend = this.state.clickedFriend;

    if(clickedFriend.includes(id)){
      this.setState({clickedFriend: [], score: 0, gamePlay:  "You lost!!"});
      console.log("You Lost")
      return;
    }
    else{
      clickedFriend.push(id)

      for (let i = friends.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friends[i],  friends[j]] = [friends[j],  friends[i]];
      }

      if(clickedFriend.length === 6){
        this.setState({clickedFriend: [], score: 6, gamePlay:  "You won!!"});
        console.log("You Win");
        return;
      }

      this.setState({friends, clickedFriend, score: clickedFriend.length, gamePlay: ""});
    }
  }

  render() {
    return (


      
        <Wrapper> 
          <Title
          score={this.state.score}
          gamePlay={this.state.gamePlay}/>      
            {this.state.friends.map(friend => (
              <FriendCard
                clickFriend={this.clickFriend}
                id={friend.id}
                key={friend.id}  
                name={friend.name}
                image={friend.image}                      
              />
            ))}
          </Wrapper>

          
    );
  }
}

export default App;

