const Index = () => (
  <section className="bg-white ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-20">
        <h2 className="mb-5 text-4xl tracking-tight font-extrabold text-gray-900 ">
          Custom App Pricing Guide
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl ">
          Every contract we handle is looked at individually, so project prices
          can differ. But remember, all our tools and integrations are there in
          the dashboard for everyone, even if you don't have a Roseware app.
        </p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow ">
          <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
          <p className="font-light text-gray-500 sm:text-lg ">
            This bare minimum package will get you a basic webiste from the CMS
            of your choice
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">~$1,000</span>
            <span className="text-gray-500 ">+ hosting fees</span>
          </div>

          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Basic CMS website</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Full dashboard access</span>
            </li>
            {/* <li className="flex items-center space-x-3">
                
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span className="font-semibold">1 developer</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span className="font-semibold">6 months</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span className="font-semibold">6 months</span></span>
                  </li> */}
          </ul>
          <a
            href="#"
            className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Get started
          </a>
        </div>

        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8">
          <h3 className="mb-4 text-2xl font-semibold">Growth</h3>
          <p className="font-light text-gray-500 sm:text-lg ">
            Our middle of the road apps are perfect for organizations who plan
            for growth
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">~$2,000</span>
            <span className="text-gray-500 ">+ hosting fees</span>
          </div>

          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Hand crafted, profesional website</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Full dashboard access</span>
            </li>
            {/* <li className="flex items-center space-x-3">
                
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span className="font-semibold">10 developers</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span className="font-semibold">24 months</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span className="font-semibold">24 months</span></span>
                  </li> */}
          </ul>
          <a
            href="#"
            className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Get started
          </a>
        </div>

        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow ">
          <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
          <p className="font-light text-gray-500 sm:text-lg">
            This would be any full-stack or large scale project, we can make
            anything. <img src="" alt="" sizes="" srcset="" />
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">~$5,000</span>
            <span className="text-gray-500 ">+ hosting fees</span>
          </div>

          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Fully custom app</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Full dashboard access</span>
            </li>
            {/* <li className="flex items-center space-x-3">
                
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span className="font-semibold">100+ developers</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span className="font-semibold">36 months</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span className="font-semibold">36 months</span></span>
                  </li> */}
          </ul>
          <a
            href="#"
            className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default Index;
