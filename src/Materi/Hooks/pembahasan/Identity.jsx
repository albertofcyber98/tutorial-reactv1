import { useCallback, useEffect, useState } from "react";

const Identity = () => {
    const fetchUser = useCallback(() => ['Edi', 'Aldo', 'Wawan'], []);
    let [user, setuser] = useState([]);
    useEffect(() =>{
        const data = fetchUser();
        setuser(data);
    }, [fetchUser])
    return (
        <div>
            <ul>
                {
                    user.map(u => <li key={u}>{u}</li>)
                }
            </ul>
        </div>
    )
}
export default Identity;