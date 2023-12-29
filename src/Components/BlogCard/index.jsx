import React from "react";
import PropTypes from "prop-types";
import "./style.css";

class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    console.log("Did Mount");
  }

  componentWillUpdate() {
    console.log("Will Update");
  }

  componentDidUpdate() {
    console.log("Did Update");
  }

  render() {
    return (
      <div className="col-md-4 col-lg-3">
        <div className="card" style={{ padding: 0 }}>
          <img
            src="https://www.wpbeginner.com/wp-content/uploads/2020/04/featuredimageswp-og.png"
            className="card-img-top"
            alt="blog"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.data}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
          </div>
        </div>
      </div>
    );
  }

  componentWillMount() {
    console.log("Will Mount");
  }
}

export default BlogCard;

BlogCard.propTypes = {
  data: PropTypes.object.isRequired,
};

// export default function BlogCard({ data = "" }) {
//   return (
//     <div className="col-md-4 col-lg-3">
//       <div className="card" style={{ padding: 0 }}>
//         <img
//           src="https://www.wpbeginner.com/wp-content/uploads/2020/04/featuredimageswp-og.png"
//           className="card-img-top"
//           alt="blog"
//         />
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the cards content.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
