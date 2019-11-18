import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const handleChange = (e: String) => {
    window.location.href = e === 'home' ? '/' : `/stellar-class/${e}`;
  }
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a className={`${router.asPath === "/" ? 'active-link' : ''}`}>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/search' as='/search'>
            <a className={`${router.asPath.includes('search') ? 'active-link' : ''}`}>Search</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a className={`${router.asPath.includes('stellar-class') ? 'active-link' : ''}`}>Stellar Class </a>
          </Link>
          &nbsp;&nbsp;
          <select
            value={router.query.class}
            onChange={(e) => handleChange(String(e.target.value))}
          >
            <option value="home"></option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="K">K</option>
            <option value="M">M</option>
            <option value="O">O</option>
          </select>
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
}

export default Nav
