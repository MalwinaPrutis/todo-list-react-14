import { useLocation } from "react-router-dom";

const useQueryParameter = (paramName) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    return params.get(paramName) || "";
};

export default useQueryParameter;