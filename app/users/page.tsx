import React from "react";
interface Users {
    id: number;
    name: string;
}

const Users = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); //{ cache: "no-store" }, { next: { revalidate: 10 } }
    const users: Users[] = await res.json();
    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <div>
                <ul>
                    {users?.map((user) => {
                        return <li key={user.id}>{user.name}</li>;
                    })}
                </ul>
            </div>
        </>
    );
};

export default Users;
