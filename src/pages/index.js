import React from 'react';
import { Link } from 'gatsby';

export default function Home() {
  return (
    <>
      <div>Hello world!</div>
      <Link to={"/about"}>About link</Link>
    </>
  )
}
