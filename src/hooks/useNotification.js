import { useCallback } from "react";
import { toast } from "sonner";

function useNotification() {
  const success = useCallback((message) => {
    toast.success(message);
  }, []);

  const error = useCallback((message) => {
    toast.error(message);
  }, []);

  return {
    success,
    error,
  };
}

export default useNotification;