import React from "react";
import { connect } from "react-redux";
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import { getRecipes, search } from "../Actions";
import "./RecipeList.css";

const RecipeLists = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
`;

const Quote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

class RecipeList extends React.Component {
  componentDidMount() {
    if (this.props.upToDate === false) {
      this.props.getRecipes();
    }
  }
  componentDidUpdate() {
    if (this.props.upToDate === false) {
      this.props.getRecipes();
    }
  }

  filter = (query) => {
    this.props.search(query, this.props.recipes);
  };

  render() {
    console.log("recipelist props", this.props);
    // let recipesToDisplay = []
    // if (this.props.recipes.length > 0) {
    // 	recipesToDisplay = this.props.recipes
    // }
    return (
      <>
        <SearchBar cb={this.filter} />
        <RecipeLists>
          {this.props.filteredRecipes.length === 0 ? (
            <h2 className="error">Add Some Secret Family Recipes!</h2>
          ) : (
            this.props.filteredRecipes.map((recipe) => (
              <Recipe recipe={recipe} />
            ))
          )}
        </RecipeLists>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes || [],
  filteredRecipes: state.filteredRecipes || [],
  upToDate: state.recipesAccurate,
  token: state.token,
});

export default connect(mapStateToProps, { getRecipes, search })(RecipeList);
