import { useHistory, useLocation } from "react-router-dom";

export default () => {
  const { search } = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(search);

  const getQueryParam = <T extends object>(key: string, accessedParams: T): null | string => {
    const queryKey = query.get(key);
    // Проверяет на корректность query параметра
    return Object.values(accessedParams).includes(queryKey) ? queryKey : null;
  };

  const setQueryParam = (key: string, value: string) => {
    const queryParam = new URLSearchParams(search);
    queryParam.set(key, value);

    history.push({
      search: queryParam.toString(),
    });
  };

  return {
    getQueryParam,  
    setQueryParam
  };
};