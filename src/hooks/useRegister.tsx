'use client';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { RegisterRequest } from '@/types/interfaces/RegisterRequest';
import { registerService } from '@/services/registerService';
import { registerValidation } from '@/lib/validations/registerValidation';

export const useRegister = () => {
  const router: AppRouterInstance = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerValidation),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: (data: RegisterRequest) => registerService(data),
    onError: (error: Error) => {
      console.log(error);
    },
    onSettled: (data) => {
      if (data && data.success) {
        router.push('/login/');
      }
    },
  });

  const onSubmit = async (data: RegisterRequest) => {
    mutate(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    reset,
    onSubmit,
    isPending,
    isError,
    error,
    isSuccess,
  };
};
