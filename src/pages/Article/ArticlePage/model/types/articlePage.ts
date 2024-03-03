import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleSortField, ArticleView, ArticleType,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/order';

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean,
    error?: string,

    // pagination
    page: number,
    limit: number,
    hasMore: boolean,

    // vizual
    view: ArticleView,
    order: SortOrder,
    sort: ArticleSortField,
    search: string,
    type: ArticleType,

    index: number,
    _inited: boolean,
}