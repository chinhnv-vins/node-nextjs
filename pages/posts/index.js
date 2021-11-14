import React from 'react'
import Card from 'react-bootstrap/card'
import Layout from '../../components/Layout'

const listPost = [
    {
        id: 1,
        name: "My post 1",
        description: "Description my post 1"
    },
    {
        id: 2,
        name: "My post 2",
        description: "Description my post 2"
    }

]

const posts = () => {
    return (
        // <div>
            <Layout>
                {listPost.map(post => (
                    <Card key={post.id}>
                        <Card.Body>{post.name}</Card.Body>
                    </Card>
                ))}
            </Layout>
        // </div>
    )
}

export default posts
