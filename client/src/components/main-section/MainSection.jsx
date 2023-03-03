import React from 'react';
import {useHistory, withRouter} from "react-router-dom";
import studioBag from '../../assets/studio-bag.png';
import './main-section.styles.scss'

function MainSection({location}) {
    let history = useHistory();
    return (
        <div className="main-section-container">
            <div className="main-section-middle">
                <div className="main-section-img">
                    <img src={studioBag} alt="studio bag"/>
                </div>
                <div className="main-section-desc">
                    <h2>Designed for fashion, Crafted for sport.</h2>
                    <p>
                        We make products that effortlessly transition from day to night.
                        From board room to the fitness studio, and everywhere in between,
                        each Nomads piece is thoughtfully created to be the perfect balance of form and function.
                    </p>
                    <button className="button is-black" id="shop-now" onClick={()=> history.push('/product')}>
                        STUDIO BAG
                    </button>
                </div>
            </div>
        </div>
    );
}

export default withRouter(MainSection);