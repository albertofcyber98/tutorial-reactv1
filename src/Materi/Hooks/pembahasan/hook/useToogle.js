import { useState } from "react"

export const useToogle = () => {
    const [value, setValue] = useState(false);

    return [value, setValue];
    
}