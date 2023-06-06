import { Switch, Route } from "react-router-dom";
import routes from "./Provider/routes";
import MainLayout from "./Provider/MainLayout";
import AppProvider from "./Provider/AppProvider";
import PrivateRoute from "./Provider/PrivateRoute";
import "./App.css";
import LoginPage from "./views/Login";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={["/", "/appointment", "/about", "/contact"]}>
          <AppProvider>
            <MainLayout>
              <PrivateRoute path="/" exact component={routes} />
              <PrivateRoute path="/appointment" exact component={routes} />
              <PrivateRoute path="/about" exact component={routes} />
              <PrivateRoute path="/contact" exact component={routes} />
            </MainLayout>
          </AppProvider>
        </Route>
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
