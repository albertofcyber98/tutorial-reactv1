// import Counter from "./pembahasan/Counter";
// import Effect from "./pembahasan/Effect";
import { useState } from "react";
import { useToogle } from "./pembahasan/hook/useToogle";
// import Identity from "./pembahasan/Identity";

const Hooks = () => {
    let [label, setLabel] = useState('ON');
    let [lampu, setLampu] = useToogle();

    const style = {
        background: lampu ? 'yellow' : 'black',
        textAlign: 'center',
        height: '400px'
    }
    const saklar = () => {
        setLampu(!lampu);

        setLabel(e =>{
            if(e === 'ON'){
                return 'OFF'
            }
            return 'ON'
        })
    }
    return(
        <div style={style}>
            <button onClick={saklar}>{label}</button>
        </div>
    )
}

export default Hooks;