import React from "react";

const Places = ({ colors }) => {
  return (
    <>
      <div className="bigger-container img-left-type position-relative d-flex">
        <img src="./images/places-1.jpg" />
        <div className="d-flex places-container">
          <div className="ml-auto">
            <h2 style={{ color: colors.main }}>L’Osteria</h2>
            <p>
              One of the most prestigious Italian cuisine known for its real
              authenticity of their food. Only the first bite of their
              traditional Italian pizza will carry you to the small streets of
              Rome or gondola in Venice. If you are a fan of good quality food
              this is the place to go to. Welcoming environment makes it a
              perfect option for business meeting as well as non-formal friends
              or family reunion.
            </p>
            <p>To book a table visit losteria.net</p>
            <a href="https://www.losteria.net" className="btn dark-variant">
              losteria.net
            </a>
          </div>
        </div>
      </div>
      <div className="bigger-container img-right-type position-relative d-flex">
        <div className="d-flex places-container">
          <div className="ml-auto">
            <h2 style={{ color: colors.main }}>U Rarášků</h2>
            <p>
              If you are looking for a great place to relax after work or to
              organize an informal meeting, this is it. This cozy wine pub is
              well-known for its friendly atmosphere. It is proofed by the long
              history behind this small business. It has already been a place
              for reunions of well - known artists, actors and writers
              (including Vaclav Havel) since the 70’s. Come and enjoy a nice
              glass of wine or typical Czech crafted beer and live the moment.
            </p>
            <div className="places-contact">
              <a href="tel:+420222101210" className="d-flex">
                <img src="./images/tel-icon.png" />
                <span>+420 222 101 210</span>
              </a>
              <a href="mailto:info@drncafe.cz" className="d-flex">
                <img src="./images/mail-icon.png" />
                <span>urarasku@urarasku.cz</span>
              </a>
            </div>
            <a href="https://www.urarasku.cz" className="btn dark-variant">
              urarasku.cz
            </a>
          </div>
        </div>
        <img src="./images/places-2.jpg" />
      </div>
      <div className="bigger-container img-left-type position-relative d-flex">
        <img src="./images/places-3.jpg" />
        <div className="d-flex places-container">
          <div className="ml-auto">
            <h2 style={{ color: colors.main }}>DRN café</h2>
            <p>
              Business life and coffee are inseparable. And we completely
              understand it. That is why we bring you the certified high-quality
              coffee of the Italian producer Filicori Zecchini. Homemade deserts
              and delicious breakfasts will certainly make your start of the day
              a little smoother.
            </p>
            <div className="places-contact">
              <a href="tel:+420607441332" className="d-flex">
                <img src="./images/tel-icon.png" />
                <span>+420 607 441 332</span>
              </a>
              <a href="mailto:info@drncafe.cz" className="d-flex">
                <img src="./images/mail-icon.png" />
                <span>info@drncafe.cz</span>
              </a>
            </div>
            <a
              href="https://www.facebook.com/drncafe"
              className="btn dark-variant"
            >
              facebook.com/drncafe
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Places;
