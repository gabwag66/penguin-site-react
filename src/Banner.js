import React from 'react';
import BannerCSS from './Banner.css';
import penguin from './img/penguin.jpg';

class Banner extends React.Component {

    render(){
        return(
            <header>
                <div>
                    <img src={penguin} />
                    <h1>Penguins</h1>
                </div>

            </header>
        );
    }


}

export default Banner;