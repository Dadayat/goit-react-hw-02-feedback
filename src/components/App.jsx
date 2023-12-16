import { Feedback } from './Feedback/Feedback';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1>Feedback</h1>
      <Feedback />
    </div>
  );
};
