import "./App.css";
import { Menu } from "../Menu/Menu";
import { ValidateGameBoardURL } from "../GameBoard/ValidateGameBoardURL";
import { boards } from "../../Data/boards";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

export function App() {
    return (
        <div className="App">
            <header className="App-body">
                <Router>
                    <Switch>
                        <Route path="/board/:boardId">
                            <ValidateGameBoardURL boards={boards} />
                        </Route>
                        <Route path="/">
                            <Menu boards={boards} />
                        </Route>
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
