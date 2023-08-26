export default function Article(props) {
  const { article } = props;
  console.log(article);

  return (
    <body className="bg-white font-sans leading-normal tracking-normal">

      <div className="text-center pt-16 md:pt-32">
        {/* <p className="text-sm md:text-base text-green-500 font-bold">{new Date(article.created_at).toDateString()}<span className="text-gray-900">/</span>{article.title}</p> */}
        <h1 className="font-bold break-normal text-3xl md:text-5xl">{article.description}</h1>
      </div>

      <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style={{backgroundImage: `url(${article.image})`, height: "75vh"}}></div>

      <div className="container max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal" style={{fontFamily: "Georgia,serif"}}>

            {/* <p className="text-2xl md:text-3xl mb-5">
              👋 Welcome fellow <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.tailwindcss.com">Tailwind CSS</a> and <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.ghost.org">Ghost</a> fan.  This starter template is an attempt to replicate the default Ghost theme <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://demo.ghost.io/welcome">"Casper"</a> using Tailwind CSS and vanilla Javascript.
            </p> */}
            {article.author_details && (
              <div class="inline-flex items-center mr-3 text-sm text-gray-900 mb-5">
              <img
                class="mr-4 w-16 h-16 rounded-full"
                src={article.author_details.profile_picture}
                alt="Jese Leos"
              />
              <div>
                <a
                  href="#"
                  rel="author_details"
                  class="text-xl font-bold text-gray-900 ">
                  {article.author_details.first_name} {article.author_details.last_name}
                </a>
                <p class="text-base font-light text-gray-500 ">
                  {article.author_details.role}
                </p>
                <p class="text-base font-light text-gray-500 ">{new Date(article.created_at).toDateString()}</p>
              </div>
              </div>
            )}

            <div dangerouslySetInnerHTML={{ __html: article.body }} />

            {/* <div id="content">
              <div id="introduction">
                  <h2><strong>Introduction</strong></h2>
                  <p>Roseware Integrations, a state-of-the-art software development agency in Portland, Oregon, is here to revolutionize the way you manage your business operations. With an array of business tools available on the Roseware Dashboard, including the groundbreaking Pipedrive-Stripe sync, we are committed to helping your business operate more efficiently and effectively.</p>
              </div>
              <br />
              <div id="pipedrive-stripe-sync">
                  <h2>The Pipedrive-Stripe Sync</h2>
                  <p>The Pipedrive-Stripe sync is a key feature of the Roseware Dashboard that ensures seamless synchronization of all customer, product, and deal information between the Pipedrive and Stripe platforms. This integration not only streamlines your operations but also creates new functionalities in the Pipedrive interface, such as the ability to create Stripe subscriptions and payments directly from Pipedrive.</p>
              </div>
              <br />
              <div id="benefits">
                  <h2>The Benefits of Roseware Integrations</h2>
                  <p><strong>Streamlined Operations:</strong> With the Pipedrive-Stripe sync, you no longer have to manually update information between the two platforms, saving you time and reducing the risk of errors.</p>
                  <p><strong>Enhanced Functionality:</strong> The integration adds new functionalities to the Pipedrive interface, making it easier to manage your Stripe subscriptions and payments.</p>
                  <p><strong>Scalable Solution:</strong> Our platform is designed to grow with your business, allowing you to add more tools and integrations as needed.</p>
              </div>
              <br />
              <div id="conclusion">
                  <h2>Conclusion</h2>
                  <p>Roseware Integrations is dedicated to helping businesses operate more efficiently and effectively. With our innovative platform and tools like the Pipedrive-Stripe sync, we make it easier than ever to manage your operations. Create an account with Roseware today and revolutionize your business operations.</p>
              </div>
          </div> */}

          
            {/* <p className="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p> */}

            {/* <ol>
              <li className="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
              <li className="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
              <li className="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
            </ol>

            <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</blockquote>

            <p className="py-6">Example code block:</p>
            <pre className="bg-gray-900 rounded text-white font-mono text-base p-4">
              <code className="break-words whitespace-pre-wrap">
                &lt;header className="site-header outer"&gt;
                  &lt;div className="inner"&gt;
                  &lt;/div&gt;
                &lt;/header&gt;
              </code>
            </pre>          */}
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="container w-full max-w-6xl mx-auto px-2 py-8">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                    <img src="https://source.unsplash.com/_AjqGGafofE/400x200" className="h-48 w-full rounded-t shadow-lg"/>
                    <div className="p-6 h-auto md:h-48">	
                      <p className="text-gray-600 text-xs md:text-sm">GETTING STARTED</p>
                      <div className="font-bold text-xl text-gray-900">Aperture Science</div>
                      <p className="text-gray-800 font-serif text-base mb-5">
                        I’ll be honest, we’re throwing science at the wall here to see what sticks. No idea what it’ll do. Probably nothing. Best case scenario you might get some super powers. Worst case, some tumors, which we’ll cut out.
                      </p>
                    </div>
                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                      <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of author_details"/>
                      <p className="text-gray-600 text-xs md:text-sm">2 MIN READ</p>
                    </div>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                    <img src="https://source.unsplash.com/_AjqGGafofE/400x200" className="h-48 w-full rounded-t shadow"/>
                    <div className="p-6 h-auto md:h-48">	
                      <p className="text-gray-600 text-xs md:text-sm">UNDERWATER</p>
                      <div className="font-bold text-xl text-gray-900">Biolumini algae diatomeae ecology.</div>
                      <p className="text-gray-800 font-serif text-base mb-5">
                        Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
                      </p>
                    </div>
                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                      <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of author" />
                      <p className="text-gray-600 text-xs md:text-sm">{new Date(article.created_at).toDateString()}</p>
                    </div>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                    <img src="https://source.unsplash.com/DEa8_vxKlEo/400x200" className="h-48 w-full rounded-t shadow"/>
                    <div className="p-6 h-auto md:h-48">	
                      <p className="text-gray-600 text-xs md:text-sm">FOREST</p>
                      <div className="font-bold text-xl text-gray-900">What is life but a teardrop in the eye of infinity?</div>
                      <p className="text-gray-800 font-serif text-base mb-5">
                        Mollis pretium integer eros et dui orci, lectus nec elit sagittis neque. Dignissim ac nullam semper aliquet volutpat, ut scelerisque.
                      </p>
                    </div>
                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                      <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of author"/>
                      <p className="text-gray-600 text-xs md:text-sm">7 MIN READ</p>
                    </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
