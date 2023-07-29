export default function IntegrationCard(props) {
  const { integrationDetails } = props;
  
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg h-fit">
      <div class="px-6 py-4 h-48">
        <div class="font-bold text-xl mb-2">{integrationDetails.title}</div>
        <p class="text-gray-700 text-base">
          {integrationDetails.description}
        </p>
      </div>
      <div className="flex justify-around mb-8">
        {integrationDetails.icons.map((icon) => (
          <div className="rounded-full bg-slate-600 h-24 w-24">
            <img
              className="inline-block rounded-full h-full w-full"
              src={icon.src}
              alt="smthn"
            />
          </div>
        ))}
      </div>
    </div>
  )
}