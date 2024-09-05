const element = (
  <div className="congrats-card-bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        className="avatar"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="card-name">Kiran V</h1>
      <p className="card-description">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        className="watch-logo"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
