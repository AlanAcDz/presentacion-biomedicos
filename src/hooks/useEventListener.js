import { useEffect } from 'react';

export const useEventListener = (listener, callback) => {
    useEffect(() => {
        document.addEventListener(listener, callback);
        return () => {
            document.removeEventListener(listener, callback);
        }
    }, []);
}
