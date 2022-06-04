import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <p>
                <span style={{ marginRight: ".5rem" }}>Name:</span>
                <b style={{ marginRight: '1rem' }}>{user?.name}</b>
            </p>
            <p>
                <span style={{ marginRight: ".5rem" }}>Email:</span>
                <b style={{ marginRight: '1rem' }}>{user?.email}</b>
            </p>
            <p>
                <span style={{ marginRight: ".5rem" }}>Phone:</span>
                <b style={{ marginRight: '1rem' }}>{user?.phone}</b>
            </p>
        </div>
    );
};

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params?.id}`)
    const user = await res.json()

    // Pass post data to the page via props
    return { props: { user } }
}

export default User;