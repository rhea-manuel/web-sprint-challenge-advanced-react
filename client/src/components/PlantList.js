import React, { Component } from "react";
import Axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor() {
    super()
    this.state = {
      plants: [],
      search: '',
      input: ''
    }
  }

  componentDidMount() {
    Axios.get("http://localhost:3333/plants").then((res) => {
      const data = res.data
      this.setState({
        plants: data.plantsData
      })
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({
      ...this.state,
      search:this.state.input
    })
  }

  handleChanges = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          Find a plant
          <input name="input" value={this.state.input} onChange={this.handleChanges}></input>
        </label>
        <button>Search</button>
      </form>
      <main className="plant-list">
        
        {this.state?.plants?.map((plant) => {

          if (this.state.search && !plant.name.toUpperCase().includes(this.state.search.toUpperCase())){
            return
          }

          return (
            <div ata-testid="plant-card" className="plant-card" key={plant.id}>
              <img className="plant-image" src={plant.img} alt={plant.name} />
              <div className="plant-details">
                <h2 className="plant-name">{plant.name}</h2>
                <p className="plant-scientific-name">{plant.scientificName}</p>
                <p>{plant.description}</p>
                <div className="plant-bottom-row">
                  <p>${plant.price}</p>
                  <p>☀️ {plant.light}</p>
                  <p>💦 {plant.watering}x/month</p>
                </div>
                <button
                  className="plant-button"
                  onClick={() => this.props.addToCart(plant)}
                >
                  Add to cart
              </button>
              </div>
            </div>
          )
        }
        )}
      </main>
      </>
    );
  }
}
