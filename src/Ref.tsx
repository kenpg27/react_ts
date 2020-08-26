import React, { useRef } from 'react';

interface IRefProps {
}

const Ref: React.FunctionComponent<IRefProps> = (props) => {

    const inputEl = useRef<HTMLInputElement>(null)

    const onFocusClick = () => {
        if (inputEl && inputEl.current) {
            console.log(inputEl);
            inputEl.current.focus()
        }
    }
    
    return (
        <div>
            <input type="text" id="input" ref={inputEl} />
            <button onClick={onFocusClick}>Focus the input</button>
        </div>
    );
};

export default Ref;
