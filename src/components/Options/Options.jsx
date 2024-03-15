import css from "./Options.module.css";

const Options = ({ options, updateFeedback, totalFeedback, reset }) => {
  return (
    <div className={css.btnList}>
      {Object.keys(options).map((option, index) => {
        return (
          <button
            className={css.btn}
            key={option}
            type="button"
            onClick={(reset) => {
              updateFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
      {totalFeedback !== 0 ? (
        <button
          className={css.btnReset}
          onClick={() => {
            reset();
          }}
          type="button"
        >
          reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;