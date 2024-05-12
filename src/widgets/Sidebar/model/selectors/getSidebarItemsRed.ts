import { createSelector } from '@reduxjs/toolkit';

import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/route';
import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about_redesigned.svg';
import ProfileIcon from '@/shared/assets/icons/user_redesigned.svg';
import ArticlesIcon from '@/shared/assets/icons/articles_redesigned.svg';
import { getUserAuthData } from '@/entities/User';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Main',
                Icon: MainIcon,
            },
            {
                path: getRouteAbout(),
                text: 'About',
                Icon: AboutIcon,
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData!.id),
                    text: 'Profile',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    text: 'Articles',
                    Icon: ArticlesIcon,
                    authOnly: true,
                },
            );
        }
        return sidebarItemsList;
    },
);
