import { CZK } from './constants';

export type UserCurrency = 'ua' | 'cz' | 'e' | 'usd';

export type Currency = keyof typeof CZK | 'czk';

export type Category = { sum: number; currency: UserCurrency; categoryName: string };

export type ValueByCurrency = { sum: number; currency: UserCurrency };
