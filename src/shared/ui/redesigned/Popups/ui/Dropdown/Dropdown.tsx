import {
    FC, Fragment, memo, ReactNode,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HeadlessuiProvider, useHealdessuiContext } from '@/shared/lib/components/HeadlessuiProvider';

import { AppLink } from '../../../AppLink';
import { Button } from '../../../Button';
import { PopupDirection } from '../../styles/types';
import { PopupDirectionConvert } from '../../styles/consts';
import cls from './Dropdown.module.scss';
import popupsCls from '../../styles/popups.module.scss';

interface DropdownItem {
    component: ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    href?: string,
}

interface DropdownProps {
    className?: string,
    data: DropdownItem[],
    label: ReactNode,
    direction?: PopupDirection,
}

/**
 * Всплывающее меню
 */
const DropdownComponent: FC<DropdownProps> = memo((props: DropdownProps) => {
    const {
        className,
        data,
        label,
        direction = 'bottom right',
    } = props;

    const { library: { Menu } } = useHealdessuiContext();

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [className])}
        >
            <Menu.Button
                as={Button}
                variant="clear"
            >
                {label}
            </Menu.Button>
            <Menu.Items
                className={classNames(popupsCls.popupMenu, {}, [PopupDirectionConvert[direction]])}
            >
                {data.map((item, indx) => {
                    const content = ({ active }: {active: boolean}) => {
                        const mods = {
                            [cls.active]: active,
                        };

                        return (
                            <Button
                                variant="clear"
                                onClick={item.onClick}
                                disabled={item.disabled}
                                className={classNames(cls.item, mods, [])}
                            >
                                {item.component}
                            </Button>
                        );
                    };

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                key={indx}
                                refName="href"
                                draggable={false}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            key={indx}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});

export default memo((props: DropdownProps) => (
    <HeadlessuiProvider>
        <DropdownComponent {...props} />
    </HeadlessuiProvider>
));
export type DropdownType = typeof DropdownComponent;
