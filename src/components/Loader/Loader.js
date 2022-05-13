import BeatLoader from 'react-spinners/BeatLoader';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.container}>
      <BeatLoader color="var(--dark-accent-color)" />
    </div>
  );
};
