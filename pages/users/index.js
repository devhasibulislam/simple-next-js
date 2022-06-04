import React from 'react';
import Link from 'next/link'

// const index = ({ users, todos }) => {
const index = ({ users }) => {
    return (
        <div>
            <h2>This is Users UI page: {users.length}</h2>
            {/* <h2>This is Users todo UI page: {todos.length}</h2> */}

            {
                users.map(user => <p key={user?.id}
                    style={{
                        width: "300px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    <span>
                        <span style={{ marginRight: ".5rem" }}>Name:</span>
                        <b style={{ marginRight: '1rem' }}>{user?.name}</b>
                    </span>
                    <Link href={`/users/${user.id}`}><button>✔️</button></Link>
                </p>)
            }
        </div>
    );
};

export async function getStaticProps(context) {
    const uri1 = 'https://jsonplaceholder.typicode.com/users';
    const res1 = await fetch(uri1);
    const data1 = await res1.json();

    // const uri2 = 'https://jsonplaceholder.typicode.com/todos';
    // const res2 = await fetch(uri2);
    // const data2 = await res2.json();
    return {
        // props: {todos: data2, users: data1}, // will be passed to the page component as props
        props: { users: data1 }, // will be passed to the page component as props
    }
}

export default index;
