'use client';
import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import MailIcon from '@/../assets/icons/email.svg';
import PersonIcon from '@/../assets/icons/person.svg';
import PhoneIcon from '@/../assets/icons/phone.svg';
import Button from '@/components/button';
import { MainPageFormDataType } from '@/types/types';
import { MainPageFormValidationScheme } from '@/utils/validationSchemes/main-page-form';
import SmallFormInput from './input';

function SmallForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MainPageFormDataType>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
    resolver: zodResolver(MainPageFormValidationScheme),
  });

  const onSubmit: SubmitHandler<MainPageFormDataType> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action="submit"
      className="mx-auto flex min-h-[387px] w-[59%] flex-col items-center rounded-[10px] pb-6 pt-10 shadow-[0_4px_45px_0_rgba(0,0,0,0.07)]">
      <p className="w-[380px] text-center text-lg text-dark-as-night">
        Оставте заявку, и мы с вами свяжемся и вы от нас не отделаетесь
      </p>
      <div className="mt-10 flex flex-row gap-8">
        <div>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <SmallFormInput
                error={errors.name}
                helperText={errors.name?.message}
                icon={<PersonIcon />}
                {...field}
                id="name"
                placeholder="Name*"
              />
            )}
          />
        </div>
        <div>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <SmallFormInput
                error={errors.email}
                helperText={errors.email?.message}
                icon={<MailIcon />}
                {...field}
                id="email"
                placeholder="E-mail*"
              />
            )}
          />
        </div>
        <div>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <SmallFormInput
                error={errors.phone}
                helperText={errors.phone?.message}
                icon={<PhoneIcon />}
                {...field}
                name="phone"
                id="phone"
                placeholder="Phone"
              />
            )}
          />
        </div>
      </div>
      <p className="mt-8 text-sm text-lightdark">
        Нажимая на кнопку &quot;Отправить&quot; вы соглашаетесь с нашей{' '}
        <Link
          href="#"
          className="bg-gradient-main from-deep-sky-blue to-rebecca-purple bg-clip-text text-transparent">
          Политикой конфиденциальности
        </Link>
      </p>
      <Button className="mt-10" type="submit" text="Отправить" />
    </form>
  );
}

export default SmallForm;
