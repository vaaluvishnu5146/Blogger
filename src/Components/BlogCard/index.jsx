import "./style.css";

export default function BlogCard({ data = "" }) {
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card" style={{ padding: 0 }}>
        <img
          src="https://www.wpbeginner.com/wp-content/uploads/2020/04/featuredimageswp-og.png"
          className="card-img-top"
          alt="blog"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
        </div>
      </div>
    </div>
  );
}
