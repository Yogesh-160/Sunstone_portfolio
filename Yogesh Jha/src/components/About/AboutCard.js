import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
function AboutCard() {
  const  { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          {t('Greeting')} {t('Im')} <span className="green">Yogesh Jha</span>, {t('')} {t('IWorkAt')} <span className="green">{t('Company')}</span> {t('Sunstone')}.
            <br/>
            {t('IHoldDegree1')} <span className="green">Full Stack Developer</span> {t('School1')} {t('And')} <span className="green">Full Stack Developer</span> {t('School2')}.
            
            <br/>
            <br/>
            {t('Interests')}
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Web Development
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Full Stack developer
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Front End Developer
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Back-end Developer
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
