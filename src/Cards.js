import React from 'react';
import CardsCss from './Cards.css';
import adelie from './img/adelie_penguin.jpg';
import chinstrap from './img/chinstrap_penguin.jpg';
import emperor from './img/Emperor_penguin.jpg';
import magellanic from './img/Magellanic_Penguin.jpg';
import rockhopper from './img/rockhopper_penguin.jpg';
import gentoo from './img/gentoo_penguin.jpg';



class Cards extends React.Component{
    constructor(props){
        super(props);

        this.state={
            isHiddenSingle: false
        }
        
        this.hoverHeaderPenguin = this.hoverHeaderPenguin.bind(this);
        this.PenguinImageHover = this.PenguinImageHover.bind(this);
    }

    

     hoverHeaderPenguin(){
            document.querySelectorAll(".penguin").forEach(function(element){
                element.classList.add("shakeshake");
            });
            document.querySelectorAll(".penguin").forEach(function(element){
                element.classList.remove("shakeshake");

            });
    }
    
    PenguinParagraphHover(){
        var penguList = document.querySelectorAll(".penguin > p");
        
        penguList.forEach(function(element){
            element.addEventListener('mouseover', function(event){
                //console.log("on");
                element.classList.add("pinkfont");
            });
            element.addEventListener('mouseout', function(event){
                //console.log("out");
                element.classList.remove("pinkfont");
            });
        });
    }

    ShowAllPenguin(){
        console.log("hide");
        document.querySelectorAll(".penguin").forEach(function(element){
            element.classList.remove("hide");
        });
    }
    
    PenguinImageHover(){    
        this.ShowAllPenguin();
    }

    HidePenguin(list, target){
        console.log("test");
    
        list.forEach(function(element){
            if((element == target) && (!element.classList.contains("hide"))){
            element.classList.add("hide");
            }
        });
    }

    hidePenguinOnClick(tag){
        console.log(tag.target.parentNode);

      /*  if(tag.target.parentNode.contains("span"))
        tag.target.parentNode.parentNode.classList.add("hide");
        else*/
        tag.target.parentNode.classList.add("hide");

        //local state update
        let copy = {...this.state};
        copy.isHiddenSingle = true;
        this.setState(copy);
    }

    HideAllPenguin(){
        document.querySelectorAll(".penguin").forEach(function(element){
            element.classList.add("hide");
        })

        //App.js state update to ishidden = true;
        this.props.onHideAll();
    }

    getClassNames(){
        let p = "penguin ";
        p += this.props.isHidden ? "hide" : "";
        return p;
    }

    FillPenguinList(){
        let PenguinList = [
            {name: "Adelie Penguin", imgSource: adelie, target: "adelie"},
            {name: "Chinstrap Penguin", imgSource: chinstrap, target: "chinstrap"},
            {name: "Emperor Penguin", imgSource: emperor, target: "emperor"},
            {name: "Gentoo Penguin", imgSource: gentoo, target: "gentoo"},
            {name: "Magellanic Penguin", imgSource: magellanic, target: "magellanic"},
            {name: "Rockhopper Penguin", imgSource: rockhopper, target: "rockhopper"},
          ];

          let element = [];
          //let that = this;
          PenguinList.forEach(function(penguin){
              element.push(
                <div className={this.getClassNames()} data-target={penguin.target} onClick={(event) => this.hidePenguinOnClick(event)}>
                    <h2>{penguin.name}</h2>
                    <span><img src={penguin.imgSource} onMouseOver={this.PenguinImageHover}/></span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o
                        fficia deserunt mollit anim id est laborum.
                    </p>
                </div>
              );
          },this);

          return element;
    }

    render(){
        return(
            <div class="penguins">
                {this.FillPenguinList()}
            </div>
        );
}

}

export default Cards;