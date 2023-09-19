import React from "react";

class AddFishForm extends React.Component {
  name = React.createRef();
  price = React.createRef();
  status = React.createRef();
  desc = React.createRef();
  image = React.createRef();

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.name.current.value,
      price: parseFloat(this.price.current.value),
      status: this.status.current.value,
      desc: this.desc.current.value,
      image: this.image.current.value,
    };
    this.props.addFish(fish);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" type="text" ref={this.name} placeholder="Name" />
        <input name="price" type="text" ref={this.price} placeholder="Price" />
        <select name="status" ref={this.status}>
          <option value="available">Fresh!!</option>
          <option value="unavailable">Sold Out!!</option>
        </select>
        <textarea name="desc" type="text" ref={this.desc} placeholder="Desc" />
        <input name="image" type="text" ref={this.image} placeholder="image" />
        <button type="submit">+ ADD ITEM</button>
      </form>
    );
  }
}

export default AddFishForm;
