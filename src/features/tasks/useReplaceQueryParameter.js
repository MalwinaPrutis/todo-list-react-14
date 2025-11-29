import { useNavigate, useLocation } from "react-router-dom";

const useReplaceQueryParameter = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const replaceQueryParameter = (paramName, value) => {
        const params = new URLSearchParams(location.search);
        if (value) {
            params.set(paramName, value);
        } else {
            params.delete(paramName);
        }
        navigate(`${location.pathname}?${params.toString()}`);
    };

    return replaceQueryParameter;
};

export default useReplaceQueryParameter;