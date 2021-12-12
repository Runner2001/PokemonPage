import React from "react";

const NewPost = () => {
  return (
    <section className="herosection2" id="pokemon">
      <div className="left">
        <div className="background">
          <img
            className="backImage"
            src="./images/Background/Dialga and Palkia_.jpeg"
            alt="diamond and peral image"
          />
          <img
            src="./images/Background/Dialga and Palkia_.jpeg"
            alt="diamond and peral image"
          />
        </div>
      </div>
      <div className="right">
        <div className="text">
          <small>new release</small>
          <h1>Peral and diamond</h1>
          <h3>the best pc game of the year</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            luctus auctor varius risus. Pretium odio pellentesque est elementum
            sed volutpat, lectus mauris maecenas. Cras sit scelerisque egestas
            id suspendisse pellentesque. Pellentesque netus dolor pellentesque
            leo vitae, convallis faucibus posuere aliquam. Ut facilisis
            tincidunt in in turpis cras at.
          </p>
          <div className="footer">
            <button className="btn">Play</button>
            <h4>learn more</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPost;
