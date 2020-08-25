import React, { useState, useEffect } from 'react';

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

    useEffect(() => {
        console.log(count);
    }, [count])

    const handleArticle = (): void => {
        console.log(article.title);
        console.log(count);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>加</button>
            <button onClick={() => setCount(count - 1)}>减</button>
            <p>Title: {article.title}</p>
            <section>Content:{article.content}</section>
            <button onClickCapture={() => handleArticle()}>
                下一篇
            </button>
        </div>
    );

};

export default Count;

