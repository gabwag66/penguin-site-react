import logo from './logo.svg';
import './App.css';
import React from 'react';
import Banner from './Banner';
import SideMenu from './SideMenu';
import Cards from './Cards';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        isHidden: false
    }
  }

  UpdateStateHidden(){
    let copy = {...this.state};
    copy.isHidden = true;
    this.setState(copy);
  }
  UpdateStateNotHidden(){
    let copy = {...this.state};
    copy.isHidden = false;
    this.setState(copy);
  }
  

  ShowAllPenguin(){
    console.log("hide");
    document.querySelectorAll(".penguin").forEach(function(element){
        element.classList.remove("hide");
        console.log(element);
    });
  } 

  HideAllPenguin(){
      console.log("test");
      document.querySelectorAll(".penguin").forEach(function(element){
          element.classList.add("hide");
      })
  }

  HideAndUpdate(){
    this.HideAllPenguin();
    this.UpdateStateHidden();
  }

  ShowAndUpdate(){
    this.ShowAllPenguin();
    this.UpdateStateHidden();
  }

    render() {
      return (
        <div>
          <Banner />
          
          <SideMenu
          onHideAll={() => this.HideAndUpdate()}
          onShowAll={() => this.ShowAndUpdate()} />

          <Cards 
          onHideAll={() => this.HideAndUpdate()}
          onShowAll={() => this.ShowAndUpdate()}/>


        </div>
    );
  }
}

export default App;
