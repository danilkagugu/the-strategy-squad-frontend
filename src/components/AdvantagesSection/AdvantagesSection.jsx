import css from "./AdvantagesSection.module.css";
import sprite from "../../assets/icons.svg";

import customers1Mob from "../../assets/customers/mobile/customers1-mob.png";
import customers1Mob2x from "../../assets/customers/mobile/customers1-mob@2x.png";
import customers2Mob from "../../assets/customers/mobile/customers2-mob.png";
import customers2Mob2x from "../../assets/customers/mobile/customers2-mob@2x.png";
import customers3Mob from "../../assets/customers/mobile/customers3-mob.png";
import customers3Mob2x from "../../assets/customers/mobile/customers3-mob@2x.png";

import customers1TabDesc from "../../assets/customers/desktop-tablet/customers1-tab-desc.png";
import customers1TabDesc2x from "../../assets/customers/desktop-tablet/customers1-tab-desc@2x.png";
import customers2TabDesc from "../../assets/customers/desktop-tablet/customers2-tab-desc.png";
import customers2TabDesc2x from "../../assets/customers/desktop-tablet/customers2-tab-desc@2x.png";
import customers3TabDesc from "../../assets/customers/desktop-tablet/customers3-tab-desc.png";
import customers3TabDesc2x from "../../assets/customers/desktop-tablet/customers3-tab-desc@2x.png";
import { useEffect, useState } from "react";
import { getCustomers } from "../../services/getCustomers";
import { useTranslation } from "react-i18next";

const AdvantagesSection = (props) => {
  const { t } = useTranslation();
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    const fetchCustomers = async () => {
      const customers = await getCustomers();
      setCustomers(customers);
    };
    fetchCustomers();
  }, []);
  const { isHideMobile } = props;
  return (
    <div
      className={`${css.sectionWrapper} ${isHideMobile ? css.mobileHide : ""}`}
    >
      <div className={css.customersWrapper}>
        <div>
          <ul className={css.imgWrapper}>
            <li className={css.customerOne}>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={`${customers1TabDesc}, ${customers1TabDesc2x} 2x`}
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={`${customers1Mob}, ${customers1Mob2x} 2x`}
                />
                <img src={customers1Mob} alt="girl" className={css.personImg} />
              </picture>
            </li>
            <li className={css.customerTwo}>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={`${customers2TabDesc}, ${customers2TabDesc2x} 2x`}
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={`${customers2Mob}, ${customers2Mob2x} 2x`}
                />
                <img src={customers2Mob} alt="boy" className={css.personImg} />
              </picture>
            </li>
            <li className={css.customerThree}>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={`${customers3TabDesc}, ${customers3TabDesc2x} 2x`}
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={`${customers3Mob}, ${customers3Mob2x} 2x`}
                />
                <img src={customers3Mob} alt="girl" className={css.personImg} />
              </picture>
            </li>
          </ul>
        </div>
        <div>
          <p className={css.text}>
            {t("our")} <span className={css.textAccent}>{t("happy")}</span>{" "}
            <br />
            {customers > 1 && (
              <span className={css.textAccent}> {customers} </span>
            )}
            {t("customers")}
          </p>
        </div>
      </div>
      <ul className={css.benefits}>
        <li>
          <p className={`${css.habit} ${css.item}`}>
            <svg className={css.iconEllipse} width={8} height={8}>
              <use href={`${sprite}#icon-ellipse`}></use>
            </svg>
            {t("habit_drive")}
          </p>
        </li>
        <li>
          <p className={`${css.view} ${css.item}`}>{t("view_statistics")}</p>
        </li>
        <li>
          <p className={`${css.personal} ${css.item}`}>
            {t("personal_rate_setting")}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default AdvantagesSection;
