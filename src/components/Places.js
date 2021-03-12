import React from "react";

const Places = ({ colors, width }) => {
  return (
    <>
      <div className="bigger-container img-left-type position-relative d-flex">
        <img src="./images/places-1.jpg" />
        <div className="d-flex places-container">
          <div className={width > 991 ? "ml-auto" : "mr-auto"}>
            <h2 style={{ color: colors.main }}>L’Osteria</h2>
            <p>
              Once the doors open at L’Osteria, you will feel like you are in a
              typical Italian osteria, where people get together to eat really
              well and enjoy the company of families, friends, couples, old and
              young. It is a lively atmosphere, and the delicious smell of
              authentic Italian cuisine lingers in the air. This is an open,
              welcoming place, where everyone can be themselves and feel at
              home. L’Osteria is famous for the best, best pizza and pasta
              d’amore. The sizeable pizza is larger than the plate. It is
              frequently ordered by two persons with different toppings on each
              half. And wait until you see the pasta!
            </p>
            <p>To book a table visit losteria.net</p>
            <a href="https://www.losteria.net" className="btn dark-variant">
              losteria.net
            </a>
          </div>
        </div>
      </div>
      <div className="bigger-container img-right-type position-relative d-flex">
        {width <= 991 && <img src="./images/places-2.jpg" />}
        <div className="d-flex places-container">
          <div className={width > 991 ? "ml-auto" : "mr-auto"}>
            <h2 style={{ color: colors.main }}>U Rarášků</h2>
            <p>
              A pub of Pilsner beer awarded the highest mark of quality - the
              Star of Brewers - awaits you with a carefully selected offer of
              drinks and farm specialties. The uniqueness of this place is
              evidenced by its long history and the gathering of famous artists,
              actors and writers (including Václav Havel) from the 70s. Come and
              enjoy a typical Czech craft beer and experience the moments.
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
        {width > 991 && <img src="./images/places-2.jpg" />}
      </div>
      <div className="bigger-container img-left-type position-relative d-flex">
        <img src="./images/places-3.jpg" />
        <div className="d-flex places-container">
          <div className={width > 991 ? "ml-auto" : "mr-auto"}>
            <h2 style={{ color: colors.main }}>DRN café</h2>
            <p>
              Business life and coffee are inseparable. And we completely
              understand it. That is why we bring you the certified high-quality
              coffee of the Italian producer Filicori Zecchini. Homemade
              desserts and delicious breakfasts will certainly make your start
              of the day a little smoother.
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
