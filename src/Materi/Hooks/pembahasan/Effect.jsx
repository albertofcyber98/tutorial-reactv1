import { useEffect, useState } from "react";

const Effect = () => {
    let [text, setText] = useState('');
    // let [display, setDisplay] = useState('');
    let [user, setUser] = useState({});
    let [second, setSecond] = useState(0);

    // useEffect(() => {
    //     setDisplay(() => localStorage.getItem('text'));
    // }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(res => setUser(res));
    }, [user])
    useEffect(() => {

        localStorage.setItem('text', text);
        console.log('sinkron');

    },[text]);
    useEffect(()=>{
        console.log('interval');
        let intervalId = setInterval(() => {
            setSecond(s => s+1);
        }, 1000);
        return() => {
            console.log('clean')
            clearInterval(intervalId);
        }
    }, [])
    return(
        <div>
            <textarea cols="10" rows="10" onChange={(e) => setText(e.target.value)}></textarea>
            {/* <p>{display}</p> */}
            <p>{user.name}</p>
            <div>Waktu : {Math.floor(second /60)} Menit {second%60} Detik</div>
        </div>
    )
}
export default Effect;