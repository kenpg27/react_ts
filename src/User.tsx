import React from 'react'

interface UserInfo {
    name: string;
    age: number;
}

const User: React.FC<UserInfo> = (props) => {


    return (
        <div className="User">
            <p>{props.name}</p>
            <p>{props.age}</p>
            <div>{props.children}</div>
        </div>
    )
}
export default User;
