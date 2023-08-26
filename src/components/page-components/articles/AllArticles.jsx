import { Link } from 'react-router-dom'

export default function AllArticles(props) {
  const { articles } = props;
  console.log('Checking articles: ', articles);

  return (
    <div className="mx-auto mb-20 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt- grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {articles.map((article) => (
          <Link to={`/articles/${article.id}`} key={article.id}>
            <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth no-underline hover:no-underline">
              <img src={article.image} alt="" className="h-48 w-full rounded-t shadow object-cover" />
              <div className="p-6 h-auto md:h-48">
                <p className="text-gray-600 text-xs md:text-sm">{article.category}</p>
                <div className="font-bold text-xl text-gray-900">{article.title}</div>
                <p className="text-gray-800 font-serif text-base mb-5 line-clamp-3">{article.description}</p>
              </div>
              <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                <img src={article.author_details.profile_picture} alt="Avatar of author" className="w-8 h-8 rounded-full mr-4" />
                <p className="text-gray-600 text-xs md:text-sm">{new Date(article.created_at).toDateString()}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
