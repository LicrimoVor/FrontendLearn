import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';
import LangSvg from '@/shared/assets/icons/ru.svg';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string,
    onClick: () => void,
}

/** Кнопка переключения языка */
export const LangSwitcherRed: FC<LangSwitcherProps> = memo((props: LangSwitcherProps) => {
    const {
        className,
        onClick,
    } = props;

    return (
        <Icon
            Svg={LangSvg}
            cliclable
            onClick={onClick}
            data-testid="lang-switcher"
            className={classNames(cls.LangSwitcher, {}, [className])}
            size={24}
        />
    );
});
