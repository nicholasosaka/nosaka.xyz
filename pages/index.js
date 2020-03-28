import Head from 'next/head'
import PersonalInfo from '../components/PersonalInfo'

const Home = () => (
  <div className="container">
    <Head>
      <title>nosaka</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="main-row">
        <span className="left">
          <PersonalInfo/>
        </span>
        <span className="right">
          <img src='../static/_profile_picture.png' className="profile-image"></img>
        </span>
      </div>
    </main>

    <style jsx>{`
    .profile-image {
      border-radius: 50%;
      width: 20rem;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .main-row {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .left {
      margin-right: 5rem;
    }
    .right {
      margin-left: 5rem;
    }

    .container {
      min-height: 100vh;
      padding: 0 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    main {
      padding: 5rem 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    footer {
      width: 100%;
      height: 100px;
      border-top: 1px solid #eaeaea;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    footer img {
      margin-left: 0.5rem;
    }
  
    footer a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    a {
      color: inherit;
      text-decoration: none;
    }
  
    .title a {
      color: #0070f3;
      text-decoration: none;
    }
  
    .title a:hover,
    .title a:focus,
    .title a:active {
      text-decoration: underline;
    }
  
    .title {
      line-height: 1;
      font-size: 4rem;
    }
  
    .title,
    .description {
      text-align: left;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  
    .description {
      line-height: 1;
      font-size: 2rem;
    }
  
    #description-sm {
      line-height: 1;
      font-size: 1.2rem;
    }
  
    code {
      background: #fafafa;
      border-radius: 5px;
      padding: 0.75rem;
      font-size: 1.1rem;
      font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    }
  
    .grid {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
  
      max-width: 800px;
    }
  
    .card {
      margin: 1rem;
      flex-basis: 45%;
      padding: 1.5rem;
      text-align: left;
      color: inherit;
      text-decoration: none;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      transition: color 0.15s ease, border-color 0.15s ease;
    }
  
    .card:hover,
    .card:focus,
    .card:active {
      color: #0070f3;
      border-color: #0070f3;
    }
  
    .card h3 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
    }
  
    .card p {
      margin: 0;
      font-size: 1.25rem;
      line-height: 1.5;
    }
  
    @media (max-width: 600px) {
      .grid {
        width: 100%;
        flex-direction: column;
      }
    }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
