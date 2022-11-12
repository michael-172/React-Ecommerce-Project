import React from 'react'

const Head = () => {
  return (
    <div className='head d-flex'>
        <div className="container d-flex">
            <div className="left row">
              <div className="wrapper-text-icon">
                <i className="fa-solid fa-phone"></i>
                <label>+88012 3456 7894</label>
              </div>

              <div className="wrapper-text-icon">
                <i className="fa-solid fa-envelope"></i>
                <label>support@ui-lib.com</label>
              </div>


            </div>
            <div className="right row">
              <label>Theme FAQ"s</label>
              <label>Need Help?</label>
              <label>🏳️‍⚧️EN</label>
              <label>🏳️‍⚧️USD</label>
            </div>
        </div>
    </div>
  )
}

export default Head
