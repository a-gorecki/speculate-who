import "./App.css";
import { Menu } from "../Menu/Menu";
import { ValidateGameBoardURL } from "../GameBoard/ValidateGameBoardURL";
import { boards } from "../../Data/boards";
import { HashRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

export function App() {
    return (
        <div className="App">
            <Router>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper"
                >
                    <Route path="/board/:boardId">
                        <ValidateGameBoardURL boards={boards} />
                    </Route>
                    <Route path="/">
                        <Menu boards={boards} />
                    </Route>
                </AnimatedSwitch>
            </Router>
        </div>
    );
}

export default App;
