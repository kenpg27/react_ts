import React, { useState, useMemo } from 'react';

interface IMemoProps {
}

const Memo: React.FunctionComponent<IMemoProps> = (props) => {

    const [time, setTime] = useState<number>(0);
    const [random, setRandom] = useState<number>(0);

    return (
        <div>
            <p>time:{time}</p>
            <p>random:{random}</p>
            <button onClick={() => { setTime(new Date().getTime()) }}>获取时间</button>
            <button onClick={() => { setRandom(Math.random()) }}>获取随机数</button>
            <ChildMemo time={time}>{random}</ChildMemo>
        </div>
    );
};

interface IChildMemoProps {
    time: number
}


const ChildMemo: React.FunctionComponent<IChildMemoProps> = (props) => {

    function changeTime(time: number): string {
        console.log(time);
        return new Date(time).toISOString();
    }

    const newTime: string = useMemo(() => {
        return changeTime(props.time);
    }, [props.time]);

    return (
        <div>
            <p>time:{newTime}</p>
            <p>random:{props.children}</p>
        </div>
    );
};



export default Memo;
