import Image from "next/image";

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
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            What we do
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600">
            We are roseware integrations. A software development agency proudly
            established in Portland Oregon. We build websites, apps, platforms,
            API&apos;s and pretty much any other software related product you
            can think of. Applications built by or integrated into our platform
            will have access to all of the features we create throughout the
            years, and the comfort of knowing that your busisness is being built
            on a platform that is designed for large scale growth and is ready
            to scale as your orginization thrives.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <Image
            className="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
