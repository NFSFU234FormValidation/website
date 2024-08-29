import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components/ParameterList.js
const ParameterList = ({ parameters }) => {
    return (
        <div className="parameter-list w-100">
            <h3 className="text-lg font-bold leading-6">Parameters:</h3>
            <div className="flex flex-wrap flex-col text-center md:flex-row md:text-left mt-4 w-100 gap-x-5">
                {parameters.map((param, index) => (
                    <div key={index} className="car w-full lg:w-[48%] py-8 px-4 border border-gray-200 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow duration-300">
                        <div className="icon mb-2">
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className="title text-xl font-semibold mb-1">{param.name}</div>
                        <div className="type text-sm text-gray-600 italic mb-2">
                            <strong>Type:</strong> {param.type}
                        </div>
                        <div className="description text-sm text-gray-800">
                            {param.description}
                        </div>
                        {param.returnType && (
                            <div className="return-type text-sm text-gray-600 mt-2">
                                <strong>Return Type:</strong> {param.returnType}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ParameterList;


