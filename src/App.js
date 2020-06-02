import React from "react";
import "./App.css";
import RecipeList from "./Components/RecipeList";
import Home from "./Components/Home";

import AddRecipeForm from "./Components/AddRecipeForm";
import RecipeDetails from "./Components/RecipeDetails";
import { Route, Link, NavLink, Redirect } from "react-router-dom";
import EditRecipeForm from "./Components/EditRecipeForm";
import styled from "styled-components";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import { connect } from "react-redux";
import Signup from "./Components/Signup";

class App extends React.Component {
  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    window.location.href = "/login";
  };

  render() {
    return (
      <>
        <header>
          <h1>
            <Link to="/">RECIPE VAULT</Link>
          </h1>
          <Route
            path={["/recipes", "/addRecipe", "/editRecipe"]}
            render={() => (
              <nav>
                <NavLink exact to="/recipes">
                  All Recipes
                </NavLink>
                <NavLink to="/addRecipe">Add Recipe</NavLink>
                <Link onClick={() => this.logout()}>Log Out</Link>
              </nav>
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <nav>
                <NavLink to="/signup">Sign Up</NavLink>
              </nav>
            )}
          />
          <Route
            exact
            path="/signup"
            render={() => (
              <nav>
                <NavLink to="/login">Log In</NavLink>
              </nav>
            )}
          />
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/recipes/share/:id" component={RecipeDetails} />
        <PrivateRoute exact path="/recipes" component={RecipeList} />
        <PrivateRoute exact path="/recipes/:id" component={RecipeDetails} />
        <PrivateRoute path="/addRecipe" component={AddRecipeForm} />
        <PrivateRoute path="/editRecipe/:id" component={EditRecipeForm} />

        {localStorage.getItem("token") && <Redirect from="/" to="/recipes" />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps, {})(App);
