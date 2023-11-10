import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { privacyData } from '@/data/privacy';

export const metadata: Metadata = {
  title: 'Privacy | SoftOcean',
  description: 'Information about SoftOcean privacy policies',
};

export default function Privacy() {
  return (
    <section className=" mx-auto flex max-h-[80vh] max-w-[750px] flex-col gap-4 overflow-y-auto font-medium scrollbar-hide md:gap-6">
      <h1 className="text-[18px] text-[#4C4C4C] md:text-[24px]">Privacy Policy</h1>
      <p className="text-[14px] text-[#222222] md:text-[16px]">
        This Privacy Policy discloses the privacy practices for First Line Software, Inc. and our
        website{' '}
        <Link
          href="/"
          className="hover:bg-gradient-main hover:from-deep-sky-blue hover:to-rebecca-purple hover:bg-clip-text hover:text-transparent">
          www.softocean.com
        </Link>{' '}
        (the “Site”). This Privacy Policy applies solely to information collected by this website,
        except where stated otherwise. This Privacy Policy sets forth what information we collect
        and how we handle information we obtain from you when you visit our Site. By using the Site,
        you are accepting and consenting to the practices described in this policy. If you would
        like additional information or need clarification, please send an email to&nbsp;
        <Link
          href="mailto:privacy@softocean.com"
          className="hover:bg-gradient-main hover:from-deep-sky-blue hover:to-rebecca-purple hover:bg-clip-text hover:text-transparent">
          privacy@softocean.com
        </Link>
      </p>
      <ul className="flex flex-col gap-6 p-0 font-medium">
        {privacyData.map((item) => {
          return (
            <li className="flex list-none flex-col gap-4 p-0 font-medium md:gap-6" key={item.id}>
              <h2 className="text-[16px] text-[#222222] md:text-[18px]">{item.title}</h2>
              <ul className="flex flex-col gap-4 p-0 font-medium md:gap-6">
                {item.paragraphs.map((paragraph) => {
                  return (
                    <li className="list-none" key={paragraph.id}>
                      <p className="text-[14px] text-[#222222] md:text-[16px]">{paragraph.text}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <h2 className="text-[16px] text-[#222222] md:text-[18px]">Contact us</h2>
      <p className="text-[14px] text-[#222222] md:text-[16px]">
        If you have any questions about this Privacy Policy, please{' '}
        <Link
          href="/contacts"
          className="hover:bg-gradient-main hover:from-deep-sky-blue hover:to-rebecca-purple hover:bg-clip-text hover:text-transparent">
          contact us
        </Link>
        .
      </p>
    </section>
  );
}
