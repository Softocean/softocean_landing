'use client';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { MainPageFormDataType } from '@/types/types';
import { MainPageFormValidationScheme } from '@/utils';

function SmallForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MainPageFormDataType>({
    defaultValues: {
      name: '',
      email: '',
      telephone: '',
      text: '',
    },
    resolver: zodResolver(MainPageFormValidationScheme),
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<MainPageFormDataType> = async (data) => {
    console.log(data);
    // const apiUrl = 'http://softocean.com:8000/api/v1/send/bot/';
    const apiUrl =
      process.env.NODE_ENV == 'development'
        ? 'http://localhost:3000/api/telegram/'
        : 'http://softocean.com:8000/api/telegram/';
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
      router.push('/success');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="mt-[200px]">
      <h2 className="text-h2-mobile font-[700] uppercase md:text-h2">Contact us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-20 flex flex-col gap-y-8">
        <div className="flex w-full flex-col items-center md:flex-row">
          <label
            htmlFor="name"
            className="w-full max-w-[340px] self-start pb-2 pr-2 text-h4-mobile font-[700] md:text-h4">
            Hi! My name is
          </label>
          <div className="flex w-full flex-col">
            <input
              type="text"
              id="name"
              {...register('name')}
              placeholder={'type here'}
              className="w-full flex-1 border-b bg-transparent px-2 pb-1 text-body-1-mobile font-[800] text-text-primary outline-none focus:border-b-2 md:text-body-1"
            />
            <span className="body-2-mobile self-start text-error-color">
              {errors.name?.message}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-x-2 gap-y-8 lg:gap-8 xl:flex-row">
          <div className="flex w-full flex-col items-center md:flex-row">
            <label
              htmlFor="email"
              className="w-full max-w-[340px] pb-2 pr-2 text-h4-mobile font-[700] md:text-h4">
              Here are my e-mail
            </label>
            <div className="flex w-full flex-col">
              <input
                type="email"
                id="email"
                {...register('email')}
                placeholder={'type here'}
                className="w-full flex-1 border-b bg-transparent px-2 pb-1 text-body-1-mobile font-[800] text-text-primary outline-none focus:border-b-2 md:text-body-1"
              />
              <span className="body-2-mobile self-start text-error-color">
                {errors.email?.message}
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col items-center md:flex-row">
            <label
              htmlFor="email"
              className="w-full max-w-[340px] pb-2 pr-2 text-h4-mobile font-[700] md:text-h4">
              and phone number
            </label>
            <div className="flex w-full flex-col">
              <input
                type="text"
                id="telephone"
                {...register('telephone')}
                placeholder={'type here'}
                className="w-full flex-1 border-b bg-transparent px-2 pb-1 text-body-1-mobile font-[800] text-text-primary outline-none focus:border-b-2 md:text-body-1"
              />
              <span className="body-2-mobile self-start text-error-color">
                {errors.telephone?.message}
              </span>
            </div>
          </div>
        </div>
        <div className="flex hidden w-full flex-col items-center md:flex-row">
          <label
            htmlFor="email"
            className="w-full max-w-[340px] pb-2 pr-2 text-h4-mobile font-[700] md:text-h4">
            and message
          </label>
          <div className="flex w-full flex-col">
            <input
              type="text"
              id="text"
              {...register('text')}
              placeholder={'type here'}
              className="w-full flex-1 border-b bg-transparent px-2 pb-1 text-body-1-mobile font-[800] text-text-primary outline-none focus:border-b-2 md:text-body-1"
            />
            <span className="body-2-mobile self-start text-error-color">
              {errors.text?.message}
            </span>
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
