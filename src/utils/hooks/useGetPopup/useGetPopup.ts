import { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import useGetParameter from "../useGetParameter/useGetParameter";
import { EPopup, POPUPS, POPUP_QUERY } from "./types";

export default () => {
  const { getQueryParam } = useGetParameter();
  const history = useHistory();
  const currentQueryPopup = getQueryParam(POPUP_QUERY.popup, POPUPS) as EPopup;
  const [mountedPopup, setMountedPopup] = useState<null | EPopup>(currentQueryPopup);
  
  useEffect(() => {
    setMountedPopup(currentQueryPopup);
  }, [currentQueryPopup, history]);

  const isOpened = useMemo(() => Boolean(currentQueryPopup), [currentQueryPopup]);

  return {
    isOpened,
    mountedPopup
  };
};
