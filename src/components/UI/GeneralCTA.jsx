import React from 'react';
import { Link } from 'react-router-dom';

export default function GeneralCTA(props) {
  const { header, subheader, primaryLink, secondaryLink } = props;
  return (
    <div className="bg-indigo-100">
      <div className="2xl:container 2xl:mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {header}
          <br />
          {subheader}
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            to={primaryLink.link}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {primaryLink.text}
          </Link>
          <Link to={secondaryLink.link} className="text-sm font-semibold leading-6 text-gray-900">
            {secondaryLink.text} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}