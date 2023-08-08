import { useSelector } from "react-redux";

export default function CardDisplayContainer(props) {
  const { text } = props;
  const user = useSelector((state) => state.session);

  return (
    <div className="mx-auto w-full p-5 rounded-lg shadow-md relative overflow-hidden">
      {/* The overlay to show the card is not available */}
      {!user.beta_feature_flag && (
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center justify-center z-10">
          <span className="text-white text-lg">Coming Soon</span>
        </div>
      )}
      
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 absolute top-5 right-5">
        Request
      </button>
      <div className="border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg h-60">
        <p className="text-gray-600 text-center">{text}</p>
      </div>
    </div>
  );
};
