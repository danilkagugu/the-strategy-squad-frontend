import css from "./AdvantagesSection.module.css";

const AdvantagesSection = (props) => {
  const { isHideMobile } = props;
  return (
    <div className={`${css.sectionWrapper} ${isHideMobile ? css.mobileHide : ''}`}>
      <div className={css.customersWrapper}>
        <div>
          <ul className={css.imgWrapper}>
            <li className={css.customerOne}>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="src\assets\customers\desktop-tablet\customers1-tab-desc.png, src\assets\customers\desktop-tablet\customers1-tab-desc@2x.png 2x"
                />
                <source
                  media="(max-width: 767px)"
                  srcSet="src\assets\customers\mobile\customers1-mob.png, src\assets\customers\mobile\customers1-mob@2x.png 2x"
                />
                <img
                  src="src\assets\customers\mobile\customers1-mob.png"
                  alt="girl"
                  className={css.personImg}
                />
              </picture>
            </li>
            <li className={css.customerTwo}>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="src\assets\customers\desktop-tablet\customers2-tab-desc.png, src\assets\customers\desktop-tablet\customers2-tab-desc@2x.png 2x"
                />
                <source
                  media="(max-width: 767px)"
                  srcSet="src\assets\customers\mobile\customers2-mob.png, src\assets\customers\mobile\customers2-mob@2x.png 2x"
                />
                <img
                  src="src\assets\customers\mobile\customers2-mob.png"
                  alt="boy"
                  className={css.personImg}
                />
              </picture>
            </li>
            <li className={css.customerThree}>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="src\assets\customers\desktop-tablet\customers3-tab-desc.png, src\assets\customers\desktop-tablet\customers3-tab-desc@2x.png 2x"
                />
                <source
                  media="(max-width: 767px)"
                  srcSet="src\assets\customers\mobile\customers3-mob.png, src\assets\customers\mobile\customers3-mob@2x.png 2x"
                />
                <img
                  src="src\assets\customers\mobile\customers3-mob.png"
                  alt="girl"
                  className={css.personImg}
                />
              </picture>
            </li>
          </ul>
        </div>
        <div>
          <p className={css.text}>
            Our <span className={css.textAccent}>happy</span> customers
          </p>
        </div>
      </div>
      <ul className={css.benefits}>
        <li>
          <p className={`${css.habit} ${css.item}`}>Habit drive</p>
        </li>
        <li>
          <p className={`${css.view} ${css.item}`}>View statistics</p>
        </li>
        <li>
          <p className={`${css.personal} ${css.item}`}>Personal rate setting</p>
        </li>
      </ul>
    </div>
  );
};

export default AdvantagesSection;
