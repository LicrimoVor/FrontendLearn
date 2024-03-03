import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ArticleDetail } from '@/entities/Article';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommend } from '@/features/Article/ArticleRecommend';
import { ArticleCommentForm } from '@/features/Article/ArticleCommentForm';
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';
import cls from './ArticleDetailPage.module.scss';
import { ArticleRating } from '@/features/Article/ArticleRating';

/** Полная статья с подробностями */
const ArticleDetailPage: FC = () => {
    const { t } = useTranslation('article/detail');

    let { id } = useParams<{id: string}>();
    if (__PROJECT__ === 'storybook') id = '1';

    if (!id) {
        return (
            <div
                className={cls.ArticleDetailPage}
            >
                {t('ArticleNotFound')}
            </div>
        );
    }

    return (
        <Page
            className={cls.ArticleDetailPage}
        >
            <VStack gap={32} max>
                <ArticleDetailPageHeader />
                <ArticleDetail articleId={id} />
                <ArticleRating articleId={id} className={cls.rating} />
                <ArticleCommentForm articleId={id} />
                <ArticleRecommend />
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailPage);