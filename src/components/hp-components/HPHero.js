import React from "react";

import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const HPHero = (props) => {
  const { t } = useTranslation("homepage");
  return (
    <Container className="position-relative">
      <div className="w-40 pr-2">
        <h1 style={{ color: props.colors.main }}>{t("heroTitle")}</h1>
        <p style={{ color: props.colors.light }}>{t("heroSubtitle")}</p>
        <div className="d-flex align-items-center flex-wrap">
          <Link to="/building" className="btn light-variant hp-btn">
            {t("heroButton")}
          </Link>
          <Link to="/offices" className="underlined-btn">
            {t("heroUnderlined")}
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default HPHero;
