import css from './Statistics.module.css';

const Statistics = ({
  goodCounter,
  neutralCounter,
  badCounter,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div className={css.list}>
        <div>Good: {goodCounter}</div>
        <div>Neutral: {neutralCounter}</div>
        <div>Bed: {badCounter}</div>
      </div>
      <div className={css.result}>Total feedbacks: {total}</div>
      <div className={css.result}>
        Positive Feedbacks: {positivePercentage} %
      </div>
    </>
  );
};

export { Statistics };
