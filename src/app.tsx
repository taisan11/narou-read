import { Link, Route, Switch } from "wouter";
import syoukai from "./syoukai";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </nav>
  );
}

function Home() {
  return (
    <div className="App">
      <h2>Home</h2>
      <Nav />
    </div>
  );
}

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/:ncode" component={syoukai} />
        <Route>
          <h2>404 not found</h2>
        </Route>
      </Switch>
    </>
  );
}

export default App;