import React, { useState, useEffect, useRef } from 'react';

interface ICountProps {
    initial: number,
}

interface IArticleProps {
    title: string,
    content: string,
}

const Count: React.FC<ICountProps> = ({ initial = 0 }) => {

    const [count, setCount] = useState<number>(initial);
    const [article, setArticle] = useState<IArticleProps>({ title: 'title', content: 'content' })

    const countRef = useRef<number>(count);



    useEffect(() => {
        // console.log(count);
        setArticle({
            title: `当前是第${count}篇标题`,
            content: `当前是第${count}篇内容`
        })
        countRef.current = count
    }, [count])

    const handleCount = () => {
        setTimeout(() => {
            // alert('current count: ' + count)
            alert('current count: ' + countRef.current)
        }, 3000);
    }

    const handleArticle = (): void => {
        setCount(count + 1);
        // 这里监听的count还是之前的count 
        // 因此 如果在这里setArticle 则count有差异
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>加</button>
            <button onClick={() => setCount(count - 1)}>减</button>
            <button onClick={() => handleCount()}>弹框显示</button>
            <p>Title: {article.title}</p>
            <section>Content:{article.content}</section>
            <button onClickCapture={() => handleArticle()}>
                下一篇
            </button>
        </div>
    );

};

export default Count;

