import React from "react";
import { addRecipe, getCategories } from "../Actions";
import { connect } from "react-redux";
import styled from "styled-components";
import "./AddRecipeForm.css";

const RecipeForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  height: 700px;
`;

const AddInput = styled.input`
  width: 250px;
  height: 30px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #0e1111;
  font-size: 15px;
  padding: 0 10px;
  display: block;
`;

const EachInput = styled.div`
  width: 430px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: bold;
  font-family: "Nunito", sans-serif;
  font-size: 15px;
  margin: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 0 0;
`;

const Button = styled.button`
  margin: 10px;

  width: 180px;
  height: 40px;
  background: #6d748c;
  color: white;
  font-size: 15px;
  outline: none;
  :hover {
    background-color: white;
    color: #6d748c;
    border: 2px solid #6d748c;
  }
`;

class AddRecipeForm extends React.Component {
  state = {
    title: "",
    source: "",
    ingredient: "",
    instructions: "",
    category: "",
  };

  componentDidMount() {
    this.props.getCategories();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  createRecipe = (event) => {
    console.log("addRecipe fields:", this.state);
    event.preventDefault();

    this.props.addRecipe(this.state);
    this.props.history.push("/recipes");
  };
  cancelAdd = (event) => {
    event.preventDefault();
    this.props.history.push("/recipes");
  };

  render() {
    return (
      <div>
        <div className="imageAdd">
          <RecipeForm>
            <div className="recipeInput">
              <p className="title">Share Your Favorite Recipe...</p>
              <EachInput>
                <div className="items">
                  <p>TITLE :</p>
                </div>
                <AddInput
                  className="input"
                  onChange={this.handleChange}
                  placeholder="title"
                  value={this.state.title}
                  name="title"
                />
              </EachInput>

              <EachInput>
                <div className="items">
                  <p>SOURCE :</p>
                </div>
                <AddInput
                  className="input"
                  onChange={this.handleChange}
                  placeholder="source"
                  value={this.state.source}
                  name="source"
                />
              </EachInput>
              <EachInput>
                <div className="items">
                  <p>INGREDIENTS :</p>
                </div>
                <textarea
                  className="instructionsInput"
                  onChange={this.handleChange}
                  placeholder="ingredients"
                  value={this.state.ingredient}
                  name="ingredient"
                ></textarea>
              </EachInput>
              <EachInput>
                <div className="items">
                  <p>INSTRUCTIONS :</p>
                </div>
                <textarea
                  className="instructionsInput"
                  onChange={this.handleChange}
                  placeholder="instructions"
                  value={this.state.instructions}
                  name="instructions"
                ></textarea>
              </EachInput>
              <EachInput>
                <div className="items">
                  <p>CATEGORY :</p>
                </div>
                <textarea
                  className="instructionsInput"
                  onChange={this.handleChange}
                  placeholder="instructions"
                  value={this.state.category}
                  name="category"
                ></textarea>
              </EachInput>
              <ButtonDiv>
                <Button
                  className="button"
                  type="submit"
                  onClick={(event) => this.createRecipe(event)}
                >
                  {" "}
                  Add Recipe{" "}
                </Button>
                <Button onClick={(event) => this.cancelAdd(event)}>
                  {" "}
                  Cancel
                </Button>
              </ButtonDiv>
            </div>
          </RecipeForm>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { addRecipe, getCategories })(
  AddRecipeForm
);
