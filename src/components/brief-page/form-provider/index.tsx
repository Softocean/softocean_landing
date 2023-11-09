'use client';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface FormProviderProps {
  children: React.ReactNode;
}

function Provider({ children }: FormProviderProps) {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
}

export default Provider;
