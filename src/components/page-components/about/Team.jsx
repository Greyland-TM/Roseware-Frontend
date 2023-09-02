import greylandImage from "../../../images/general/greyland.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Team() {
  const people = [
    {
      name: "Greyland Miller",
      role: "Principle Engineer / Founder",
      imageUrl: greylandImage,
      bio: "",
      links: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/greyland-miller",
          icon: AiFillLinkedin,
        },
        {
          platform: "github",
          url: "https://www.github.com/greyland-tm",
          icon: AiFillGithub,
        },
      ],
    },
  ];

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-11 lg:px-11 md:py-10 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-start">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Who we are
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600">
            We're the faces behind Roseware Integrations. From Portland, we come
            together as engineers, designers, and marketers. Our goal? Develop
            tools that make managing your business easier, and make sure
            everyone knows about it.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  {person.links.map((platform) => (
                    <li key={platform.platform}>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <platform.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
