import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator/storeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { userTest } from '@/entities/User/model/test/data';
import { articleTest } from '@/entities/Article/model/test/data';
import ArticleEditPage from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'pages/Article/ArticleEditPage',
    component: ArticleEditPage,
    decorators: [
        storeDecorator({
            user: {
                authData: userTest,
                _inited: true,
            },
            articleDetail: {
                data: articleTest,
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Light: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
    ],
};

export const Red: Story = {
    decorators: [
        themeDecorator(Theme.RED),
    ],
};