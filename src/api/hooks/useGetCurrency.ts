import { AxiosError } from 'axios';
import { CurrencyData } from '../types';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { axiosInstance } from '../axiosInstance';

export function useGetCurrency(
  params: Record<string, string> = {},
  options: Omit<UseQueryOptions<CurrencyData, AxiosError>, 'queryKey'> = {},
): UseQueryResult<CurrencyData> {
  return useQuery({
    queryKey: ['currency'],
    queryFn: () => axiosInstance.get('').then((res) => res.data),
    ...options,
  });
}
