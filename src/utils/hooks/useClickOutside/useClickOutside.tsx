import { RefObject, useCallback, useEffect, useRef } from "react";

const useClickOutside = <T extends HTMLElement>(onClose: VoidFunction): RefObject<T> => {
  const ref = useRef<T>(null);

  const mouseListener = useCallback((event: MouseEvent) => {
    // TODO: Убрать ASS
    if (!ref.current?.contains(event.target as Node)) {
      event.preventDefault();
      onClose();
    }
  }, [onClose]);

  const keyboardListener = useCallback((event) => {
    if (event.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('click', mouseListener);
    document.addEventListener('keyup', mouseListener);

    return () => {
      document.removeEventListener('click', mouseListener);
      document.removeEventListener('keyup', mouseListener);
    };
  }, [mouseListener, keyboardListener]);

  return ref;
};

export default useClickOutside;