// src/hooks/order/useOrderMutation.js
import { useMutation } from '@tanstack/react-query';
import { createOrder } from '../../service/orderService';

export const useCreateOrder = () => {
    return useMutation({
        mutationFn: createOrder,
        
    });
};
