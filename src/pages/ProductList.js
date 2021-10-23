import React from "react";
import "./styles/ProductCard.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProduct } from "../redux/actions";

//   componentDidMount() {
//     window.addEventListener('scroll', this.loadMore)
//   }

//   componentWillUnmount() {
//     window.addEventListener('scroll', this.loadMore)
//   }

//   loadMore = () => {
//     setTimeout(() => {
//       this.setState({ limit: this.state.limit + 5 })
//     }, 1500)
//   }

const ProductList = (props) => {
  const { products, onDelete } = props;

  const show = (data) => {
    if (data && data.length > 0) {
      return (
        data &&
        data.map((value, key) => {
          return (
            <div key={key} className="card-container">
              <div className="product-data">
                <p>{value.id}</p>
                <p>{value.name}</p>
                <p>{value.desc}</p>
              </div>
              <div className="product-action">
                <Link to={`/edit/${value.id}`}>
                  <button className="btn-edit">Edit</button>
                </Link>
                <button
                  className="btn-delete"
                  type="button"
                  onClick={() => onDelete(value.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      );
    }
    return null;
  };
  return (
    <div>
      {products.products.length === 0 && <p>No products available on list.</p>}
      {show(products.products && products.products)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
