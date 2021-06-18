import React from 'react';
import sideMenu from './SideMenu.css';





class SideMenu extends React.Component{

    constructor(props){
        super(props);

        
        //this.HideAllPenguin = this.HideAllPenguin.bind(this);
        //this.ShowAllPenguin = this.ShowAllPenguin.bind(this);
    }

    /*ShowAllPenguin(){
        console.log("hide");
        document.querySelectorAll(".penguin").forEach(function(element){
            element.classList.remove("hide");
            console.log(element);
        });
        this.props.onShowAll();
    }
    
     HideAllPenguin(){
        console.log("test");
        document.querySelectorAll(".penguin").forEach(function(element){
            element.classList.add("hide");
        });
       this.props.onHideAll();
    }*/

  

    

 

    render(){

        

        return(
            <div className="menu">
                <a href="penguins.html"><div className="menupoints">Home</div>  </a>
                <a href="penguins.html"><div className="menupoints">Gallery</div>  </a>
                <a href="penguins.html"><div className="menupoints">Impressum</div>  </a>
                <div className="menupoints" onClick = {() => this.props.onShowAll()}>Show All</div>  
                <div className="menupoints" onClick= {() => this.props.onHideAll()}>Hide All</div>               
            </div>
        );
}

}

export default SideMenu;