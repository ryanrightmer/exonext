import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/search' as='/search'>
          <a>Search</a>
        </Link>
      </li>
      <li>
        <Link href='/stellar-class/[class]' as="/stellar-class/b">
          <a>Stellar Class B</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: flex-end;
        background: #e6e6e6;
      }
      nav > ul {
        padding: 22px 16px;
        margin-bottom: 40px;
      }
      li {
        display: flex;
        padding: 0 30px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 20px;
      }
    `}</style>
  </nav>
)

export default Nav
