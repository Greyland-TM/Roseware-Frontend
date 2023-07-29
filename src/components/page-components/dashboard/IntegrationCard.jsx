import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function IntegrationCard(props) {
  const { integrationDetails } = props;
  const isConnected = integrationDetails.icons.every((icon) => icon.isLinked);
  console.log(isConnected);
  
  return (
    <div class={`max-w-sm rounded-xl overflow-hidden shadow-lg h-fit ${isConnected ? 'ring-2 ring-green-500 p-2' : 'p-0'}`}>
      <div class="px-6 py-4 h-48">
        <div class="font-bold text-xl mb-2">{integrationDetails.title}</div>
        <p class="text-gray-700 text-base">
          {integrationDetails.description}
        </p>
      </div>
      <div className="flex justify-around mb-8">
        {integrationDetails.icons.map((icon) => (
          <div className="flex flex-col align-middle justify-center relative">
            <div className={`flex items-center justify-center p-1 rounded-full mb-4 bg-slate-300 h-24 w-24`}>
              <img
                className="inline-block rounded-full h-full w-full"
                src={icon.src}
                alt="smthn"
              />
              {/* {icon.isLinked && 
              <CheckCircleIcon className="absolute -top-2 -right-2 h-6 w-6 text-green-500" aria-hidden="true" />} */}
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
