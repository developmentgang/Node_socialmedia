import React from 'react'

export default function ProfileEvents() {
  return (
    <>
      {/* <!-- Events START --> */ }
        <div className="card">
          {/* <!-- Card header START --> */ }
          <div className="card-header d-sm-flex align-items-center justify-content-between border-0 pb-0">
            <h5 className="card-title mb-sm-0">Discover Events</h5>
            {/* <!-- Button modal --> */ }
            <a className="btn btn-primary-soft btn-sm" href="#"> <i className="fa-solid fa-plus pe-1"></i> Create events</a>
          </div>
          {/* <!-- Card header END --> */ }
          {/* <!-- Card body START --> */ }
          <div className="card-body">
            {/* <!-- Upcoming event START --> */ }
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Upcoming event:</strong> The learning conference on Sep 19 2022
              <a href="events.html" className="btn btn-xs btn-success ms-md-4">View event</a>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            {/* <!-- Upcoming event END --> */ }
            {/* <!-- Events list START --> */ }
            <div className="row">
              <div className="d-sm-flex align-items-center">
                {/* <!-- Avatar --> */ }
                <div className="avatar avatar-xl">
                  <a href="#!"><img className="avatar-img rounded border border-white border-3" src="assets/images/events/01.jpg" alt="" /></a>
                </div>
                <div className="ms-sm-4 mt-2 mt-sm-0">
                  {/* <!-- Info --> */ }
                  <h5 className="mb-1"><a href="event-details.html"> Comedy on the green </a></h5>
                  <ul className="nav nav-stack small">
                    <li className="nav-item">
                       <i className="bi bi-calendar-check pe-1"></i> Mon, Sep 25, 2020 at 9:30 AM
                    </li>
                    <li className="nav-item">
                      <i className="bi bi-geo-alt pe-1"></i> San francisco 
                    </li>
                    <li className="nav-item">
                      <i className="bi bi-people pe-1"></i> 77 going
                    </li>
                  </ul>
                </div>
                {/* <!-- Button --> */ }
                <div className="d-flex mt-3 ms-auto">
                  <div className="dropdown">
                    {/* <!-- Card share action menu --> */ }
                    <button className="icon-md btn btn-secondary-soft" type="button" id="profileAction" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-three-dots"></i>
                    </button>
                    {/* <!-- Card share action dropdown menu --> */ }
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileAction">
                      <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2"></i>Share profile in a message</a></li>
                      <li><a className="dropdown-item" href="#"> <i className="bi bi-file-earmark-pdf fa-fw pe-2"></i>Save your profile to PDF</a></li>
                      <li><a className="dropdown-item" href="#"> <i className="bi bi-lock fa-fw pe-2"></i>Lock profile</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#"> <i className="bi bi-gear fa-fw pe-2"></i>Profile settings</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Events list END --> */ }
          </div>
          {/* <!-- Card body END --> */ }
        </div>
        {/* <!-- Events START --> */ }
    </>
  )
}
