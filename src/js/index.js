//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
function SimpleCounter(props){
    return(
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="cuatro">0</div>
            <div className="tres">0</div>
            <div className="dos">0</div>
            <div className="uno">0</div>
        </div>
    );
}

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter/>);

