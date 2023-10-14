import React from 'react';
import Link from 'next/link';

export default function GeneralCTA(props: any) {
  const { header, subheader, primaryLink, secondaryLink } = props;
  return (
    <div className="bg-zinc-100">
      <div className="2xl:container 2xl:mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8 max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {header}
          <br />
          {subheader}
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            href={primaryLink.link}
            className="rounded-md bg-Vine px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            {primaryLink.text}
          </Link>
          <Link href={secondaryLink.link} className="text-sm font-semibold leading-6 text-gray-900">
            {secondaryLink.text} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}