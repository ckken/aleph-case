import { Head, Link } from 'aleph'
import React from 'react'
import Nav from '../components/nav.tsx'
export default function Blog() {
    return (
        <>
            <Nav title="Blog" />
            <h1>My Blog.</h1>
            <ul>
                <li><Link to="/post/hello-world">Hello World</Link></li>
                <li><Link to="/post/bla-bla-bla">Bla Bla Bla</Link></li>
            </ul>
            <p><Link to="/">Home</Link></p>
        </>
    )
}