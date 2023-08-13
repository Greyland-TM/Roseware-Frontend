const people = [
  {
    name: 'Greyland Miller',
    role: 'Software Engineer / Founder',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'I am an Oregon raised nerd who likes hiking in the mountians, experiencing art crafted by a loved one, and creating things that improve quality of life. I designed, developed and maintain this platform as a way to make managing my clients easy, and it turns oout I was able to open the software up enough to share it.',
    linkedinUrl: '#',
    githubUrl: '#',
  },
  // {
  //   name: 'Emma Dorsey',
  //   role: 'Senior Developer',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  //   bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
  //   twitterUrl: '#',
  //   linkedinUrl: '#',
  // },
  // {
  //   name: 'Emma Dorsey',
  //   role: 'Senior Developer',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  //   bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
  //   twitterUrl: '#',
  //   linkedinUrl: '#',
  // },
  // More people...
]

export default function Example() {
  return (
    <div class="2xl:container 2xl:mx-auto lg:py-11 lg:px-11 md:py-10 md:px-6 py-9 px-4">
      {/* <div className>
        <section className="mx-auto container w-full py-36">
          <div className="flex flex-col justify-center items-center">
              <div className="md:text-5xl text-4xl font-black text-center text-gray-800 leading-snug lg:w-3/4">
                  <h2>Let us introduce ourseleves...</h2>
              </div>
          </div>
        </section>
      </div> */}
      <div class="flex flex-col lg:flex-row justify-between gap-8">
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">What we do</h1>
              <p class="font-normal text-base leading-6 text-gray-600">
                We are roseware integrations. A software development agency proudly established in Portland Oregon. We build websites, apps, 
                platforms, API's and pretty much any other software related product you can think of. Applications built by or integrated into 
                our platform will have access to all of the features we create throughout the years, and the comfort of knowing that your busisness 
                is being built on a platform that is designed for large scale growth and is ready to scale as your orginization thrives.
              </p>
          </div>
          <div class="w-full lg:w-8/12">
              <img class="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
          </div>
      </div>

      <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Who we are</h1>
              <p class="font-normal text-base leading-6 text-gray-600">
                There are two of us contributing at the moment, and we each have our own story. But as an organization i think it's fair to say our story 
                is fairly new. We know software, and want to do some good. 
              </p>
          </div>
          <div class="w-full lg:w-8/12 lg:pt-8">
              <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                  <div class="p-4 pb-6 flex justify-center flex-col items-center">
                      <img class="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Image" />
                      <img class="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Image" />
                      <p class="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                  </div>
                  <div class="p-4 pb-6 flex justify-center flex-col items-center">
                      <img class="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Image" />
                      <img class="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
                      <p class="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                  </div>
                  <div class="p-4 pb-6 flex justify-center flex-col items-center">
                      <img class="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                      <img class="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                      <p class="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                  </div>
                  <div class="p-4 pb-6 flex justify-center flex-col items-center">
                      <img class="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                      <img class="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                      <p class="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                  </div>
              </div>
          </div>
      </div>
  </div>

  )
}
