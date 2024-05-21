import React from 'react'

function Footer() {
  return (
    <>
    <hr/>
    <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
    <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover" href="/about">About us</a>
    <a className="link link-hover" href="/contact">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
    </nav> 
    <nav>
    <div className="grid grid-flow-col gap-4">
      {/* GitHUB */}
      <a href="https://github.com/RMDcode" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.86 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.86-.01-1.7-2.51.46-3.05-1.21-3.05-1.21-.41-1.04-1-1.32-1-1.32-.82-.55.06-.54.06-.54.91.06 1.39.94 1.39.94.81 1.39 2.13.99 2.65.76.08-.59.31-.99.56-1.22-1.96-.22-4.02-.98-4.02-4.37 0-.96.34-1.75.89-2.37-.09-.22-.38-1.12.08-2.33 0 0 .73-.24 2.4.9.7-.2 1.45-.3 2.2-.3.75 0 1.5.1 2.2.3 1.67-1.14 2.4-.9 2.4-.9.46 1.21.17 2.11.08 2.33.55.62.89 1.41.89 2.37 0 3.4-2.07 4.15-4.04 4.37.32.27.61.81.61 1.64 0 1.18-.01 2.13-.01 2.42 0 .27.18.59.69.49C19.14 20.15 22 16.41 22 12c0-5.52-4.48-10-10-10z"/>
      </svg>
      </a>

      {/* Linkedin */}
      <a href="https://www.linkedin.com/in/dhurirohit05/" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
      <path fill="#0077B5" d="M57.5 0h-51C3.7 0 0 3.7 0 8.2v47.6C0 60.3 3.7 64 8.2 64h51c4.5 0 8.2-3.7 8.2-8.2V8.2C65.7 3.7 62 0 57.5 0zM19.7 55.2h-9V24.3h9v30.9zm-4.5-36c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1zm39.7 36h-9V37.8c0-3.3-.1-7.5-4.6-7.5-4.6 0-5.3 3.6-5.3 7.3v17.6h-9V24.3h8.8v4.1h.1c1.2-2.3 4.1-4.6 8.6-4.6 9.2 0 10.9 6 10.9 13.8v16.6zM12.6 9.5c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1c2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1z"/>
      </svg>
      </a>
      {/* GitHUB */}
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
    </nav> 
    <aside>
    <p>Copyright © 2024 - All right reserved by RMD's </p>
    </aside>
    </footer>   
    </>
  )
}

export default Footer