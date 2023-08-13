import { Link } from 'react-router-dom'

export default function AllArticles(props) {
  const { articles } = props

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className>
          <section className="mx-auto container w-full py-8">
            <div className="flex flex-col justify-center items-center">
              <div className="md:text-5xl text-4xl font-black text-center text-gray-800 leading-snug lg:w-3/4">
                <h2>Our articles</h2>
              </div>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Typically published once a month
              </p>
            </div>
          </section>
        </div> */}
        <div className="mx-auto mt- grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article) => (
            <Link to={`/articles/${article.id}`}>
              <article key={article.id} className="flex flex-col items-start justify-between cursor-pointer">
                <div className="relative w-full">
                  <img
                    src={article.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={article.datetime} className="text-gray-500">
                      {article.date}
                    </time>
                    <a
                      href={article.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {article.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={article.href}>
                        <span className="absolute inset-0" />
                        {article.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{article.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={article.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={article.author.href}>
                          <span className="absolute inset-0" />
                          {article.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{article.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
  )
}
