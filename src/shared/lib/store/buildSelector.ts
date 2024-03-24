import { useSelector } from 'react-redux';

import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [()=> T, Selector<T>]

export function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useSelectorHook = () => useSelector(selector);

    return [useSelectorHook, selector];
}