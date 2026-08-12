import { useCallback } from "react";
import { toast } from "sonner";

function useNotification() {
  const success = useCallback((message: string): void => {
    toast.success(message);
  }, []);

  const error = useCallback((message: string): void => {
    toast.error(message);
  }, []);

  return {
    success,
    error,
  };
}

export default useNotification;
