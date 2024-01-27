import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string,
}

/** Страница для редактирования статьи */
const ArticleEditPage: FC<ArticleEditPageProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article');
    const { id } = useParams<{id:string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t('EditArticleById') + id
                : t('CreateNewArticle')}
        </Page>
    );
};

export default memo(ArticleEditPage);