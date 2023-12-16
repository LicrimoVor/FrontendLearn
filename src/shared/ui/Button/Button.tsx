import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  theme?: ButtonTheme,
  inverted?: boolean
}

/** Своя кнопочка */
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        inverted = false,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={
                classNames(cls.Button, { [cls.inverted]: inverted }, [className, cls[theme]])
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};
