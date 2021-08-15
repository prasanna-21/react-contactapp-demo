import "./App.css";
import AddContact from "./component/addContact";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ContactList from "./component/contactList";
import Navbar from "./component/navbar";
import EditContact from "./component/editContact";
import Header from "./component/header";
import NotFound from "./component/notFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/contacts" exact component={ContactList} />
          <Route path="/addContact" exact component={AddContact} />
          <Route path="/editContact" exact component={EditContact} />
          <Route path="/notfound"  component={NotFound} />
          <Redirect to='/notfound'/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
