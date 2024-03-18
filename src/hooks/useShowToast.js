import { useToast } from "@chakra-ui/react"
import { useCallback } from "react";

// useCallback is used to prevent inifinate loop, by caching the function
const useShowToast = () => {
    const toast = useToast();    
    
    const showToast = useCallback((title, description, status) => {
        toast({
            title: title,
            description: description,
            status: status,
            duration: 3000,
            isClosable: true,
        });
    }, [toast])

    return showToast;
}

export default useShowToast;