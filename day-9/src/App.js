// import logo from './logo.svg';
import React, { Component } from 'react'
import AddAlbum from './Components/AddAlbum'
import Album from './Components/Album'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Albums from './Components/Albums';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      albums: [
        {id: 1, artist: "Vijay T", album_title: "Master", album_cover: "Music Anirudh R", songs: "Sound Track1", img: "https://pbs.twimg.com/media/ENHL1IpUYAI57ES.jpg"},
        {id: 2, artist: "Naveen Polishetty", album_title: "Jathirathnalu", album_cover: "Music Radhan", songs: "Sound Track2", img:"https://i.pinimg.com/564x/98/00/43/980043f6a7f11de10b37db34b73739ab.jpg"},
        {id: 3, artist: "Suriya", album_title: "Aakasam Nee Haddura", album_cover: "Music G. V. Prakash", songs: "Sound Track3", img : "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/11/10/Suriya-s-Soorari-Pottru-and-Aakasam-Nee-Haddura-movie-first-look-posters-2.jpg?quality=90&zoom=1&ssl=1"},
      ],
      errorMsg: ''
    }
    this.receiver = this.receiver.bind(this)
    this.delete = this.delete.bind(this)
  }
  
  receiver = (obj) => {
    let { albums } = this.state;
    console.log(obj)
    albums.push(obj);
    console.log('Hi from receiver method = pushed new album');
  }
  delete(){
    let { albums, obj } = this.state;
    albums.pop(obj);
    console.log('Hi from receiver method = pushed new album');
    console.log('Hi from delete method');
  }
  render() {
    return (
      <div className="App">
         <Router>
        <Nav />
        <Switch> 
        <Route exact path = "/" component = {Home} />
        <Route path = "/addalbum" component = {AddAlbum} />
        <Route path = "/albums" component = {Albums} />
        </Switch>
        </Router>
        <AddAlbum receiveFunc = {this.receiver}/>
        {/* <Album artist={this.state.artist} album_title={this.state.album_title} album_cover={this.state.album_cover}/> */}
        <Albums albums={this.state.albums} deleteFunc={this.delete}/> 
      </div>
      
      
    )
  }
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App