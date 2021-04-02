import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./components/landing";
import General from "./components/general";
import Navbar from "./components/navbar";
import Curated from "./components/curated";
import Randomize from "./components/randomize";
import MembersPlace from "./components/membersPlace";
import GenerateSound from "./components/generateSound";
import SoundOutput from "./components/soundOutput";
import SoundToggle from "./components/soundToggle";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/curated" exact component={Curated} />
          <Route path="/general" exact component={General} />
          <Route path="/random" exact component={Randomize} />
          <Route path="/members-place" exact component={MembersPlace} />
          <Route path="/generate-sound" exact component={GenerateSound} />
          <Route path="/your-sound" exact component={SoundOutput} />
        </Switch>
        <SoundToggle />
      </Router>
    </>
  );
}

export default App;
