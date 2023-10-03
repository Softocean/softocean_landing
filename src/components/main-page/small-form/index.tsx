'use client';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import MailIcon from '@/../assets/icons/email.svg';
import PersonIcon from '@/../assets/icons/person.svg';
import PhoneIcon from '@/../assets/icons/phone.svg';
import { Button } from '@/components/ui';
import { MainPageFormDataType } from '@/types/types';
import { MainPageFormValidationScheme } from '@/utils';
import SmallFormInput from './input';

function SmallForm() {
  const {
    register,
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

 const onSubmit: SubmitHandler<MainPageFormDataType> = async (data) => {
    const apiUrl = 'http://38.242.194.155:8000/api/v1/send/bot/';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="mt-[200px]">
      <h2 className="text-h2-mobile md:text-h2 font-[700] uppercase">Contact us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-20 flex flex-col gap-y-8">
        <div className="flex w-full flex-col items-center md:flex-row">
          <label htmlFor="name" className="text-h4-mobile md:text-h4 pb-2 pr-2 font-[700]">
            Hi! My name is
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            placeholder={'type here'}
            className="text-body-1-mobile md:text-body-1 text-text-primary w-full flex-1 border-b bg-transparent px-2 pb-1 font-[800] outline-none focus:border-b-2"
          />
        </div>
        <div className="flex flex-col gap-y-8 xl:flex-row">
          <div className="flex w-full flex-col items-center gap-4 md:flex-row">
            <label htmlFor="email" className="text-h4-mobile md:text-h4 pb-2 pr-2 font-[700]">
              Here are my e-mail
            </label>
            <input
              type="text"
              id="email"
              {...register('email')}
              placeholder={'type here'}
              className="text-body-1-mobile md:text-body-1 text-text-primary w-full flex-1 border-b bg-transparent px-2 pb-1 font-[800] outline-none focus:border-b-2"
            />
          </div>
          <div className="flex w-full flex-col items-center gap-4 md:flex-row">
            <label htmlFor="email" className="text-h4-mobile md:text-h4 pb-2 pr-2 font-[700]">
              and phone number
            </label>
            <input
              type="text"
              id="phone"
              {...register('phone')}
              placeholder={'type here'}
              className="text-body-1-mobile md:text-body-1 text-text-primary w-full flex-1 border-b bg-transparent px-2 pb-1 font-[800] outline-none focus:border-b-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="self-center rounded-xl border-2 px-16 py-4 hover:shadow-lg active:scale-[.99]">
          Submit
        </button>
      </form>
      {/*       
      <form
        onSubmit={handleSubmit(onSubmit)}
        action="submit"
        className="mx-auto flex min-h-[387px] flex-col items-center rounded-[10px] px-4 pb-6 pt-10 shadow-[0_4px_45px_0_rgba(0,0,0,0.07)] sm:w-[59%]">
        <p className="w-[200px] text-center text-sm text-dark-as-night md:text-base-24 lg:w-[380px] lg:text-lg">
          Оставте заявку, и мы с вами свяжемся и вы от нас не отделаетесь
        </p>
        <div className="mt-10 flex w-full flex-col gap-8 lg:w-fit lg:flex-row">
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
        <Button className="mt-10" type="submit">
          Отправить
        </Button>
      </form> */}
    </div>
  );
}

export default SmallForm;
