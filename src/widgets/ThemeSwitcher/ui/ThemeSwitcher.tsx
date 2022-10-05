import {classNames} from "shared/lib/classNames/classNames";
import styles from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames(styles.ThemeSwitcher, {}, [className])}>

    </div>
  );
};
