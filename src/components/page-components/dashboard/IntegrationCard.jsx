import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function IntegrationCard(props) {
  const { integrationDetails } = props;
  const isConnected = integrationDetails.icons.every((icon) => icon.isLinked);
  
  return (
    <div className={`max-w-sm rounded-xl overflow-hidden shadow-lg h-fit ${isConnected ? 'ring-2 ring-green-500 p-2' : 'p-0'}`}>
      <div className="px-6 py-4 h-48">
        <div className="font-bold text-xl mb-2">{integrationDetails.title}</div>
        <p className="text-gray-700 text-base">
          {integrationDetails.description}
        </p>
      </div>
      <div className="flex justify-around mb-8">
        {integrationDetails.icons.map((icon, idx) => (
          <div key={idx} className="flex flex-col align-middle justify-center relative">
            <div className={`flex items-center justify-center p-1 rounded-full mb-4 bg-slate-300 h-24 w-24`}>
              <img
                className="inline-block rounded-full h-full w-full"
                src={icon.src}
                alt="smthn"
              />
            </div>
            <button
              type="button"
              className={`inline-flex items-center gap-x-2 rounded-md ${icon.isLinked ? 'bg-green-600' : 'bg-blue-400'} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              {icon.isLinked ? "Linked" : "Not Linked"}
              {icon.isLinked && <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
