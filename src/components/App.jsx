import React, {Component} from "react";
import Header from "./Header.jsx";
import Intro from "./Intro.jsx";
import Process from "./Process.jsx";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Intro/>
                <Process/>
            </div>
        );
    }
}

export default App;