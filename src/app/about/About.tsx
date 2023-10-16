

const contributors = [
  {
    name: "Greyland Miller",
    role: "Principle Engineer / Founder",
    imageUrl: "/greyland.jpg",
    links: {
      gitHub: "",
      linkedIn: "",
    },
  },
];

export default function About() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-11 lg:px-11 md:py-10 md:px-6 py-9 px-4">
      {/* <div className>
        <section className="mx-auto container w-full py-36">
          <div className="flex flex-col justify-center items-center">
              <div className="md:text-5xl text-4xl font-black text-center text-gray-800 leading-snug lg:w-3/4">
                  <h2>Let us introduce ourseleves...</h2>
              </div>
          </div>
        </section>
      </div> */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            What we do
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600">
            We are roseware integrations. A software development agency proudly
            established in Portland Oregon. We build websites, apps, platforms,
            API's and pretty much any other software related product you can
            think of. Applications built by or integrated into our platform will
            have access to all of the features we create throughout the years,
            and the comfort of knowing that your busisness is being built on a
            platform that is designed for large scale growth and is ready to
            scale as your orginization thrives.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      {/* <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Who we are</h1>
              <p className="font-normal text-base leading-6 text-gray-600">
                There are two of us contributing at the moment, and we each have our own story. But as an organization i think it's fair to say our story 
                is fairly new. We know software, and want to do some good. 
              </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                  {contributors.map((contributor) => (
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                      <img src={contributor.imageUrl} alt="Alexa featured Image" />
                      <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                      <div className="w-full">
                        <h4 className="text-lg font-semibold leading-8 tracking-tight text-gray-800">{contributor.name}</h4>
                        <p className="text-base leading-7 text-gray-600">{contributor.role}</p>
                        <ul role="list" className="mt-2 flex gap-x-6">
                          <li>
                            <a href='www.twitter.com' className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">Twitter</span>
                              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href='www.linkedin.com' className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">LinkedIn</span>
                              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                  <div className="p-4 pb-6 flex justify-center flex-col items-center">
                      <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Image" />
                      <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
                      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                  </div>
                  <div className="p-4 pb-6 flex justify-center flex-col items-center">
                      <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                      <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                  </div>
                  <div className="p-4 pb-6 flex justify-center flex-col items-center">
                      <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                      <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                  </div>
              </div>
          </div>
      </div> */}
    </div>
  );
}
