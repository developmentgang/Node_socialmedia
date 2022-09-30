import React from 'react'

export default function FriendsCard() {
  return (
    <>
      { /* <!-- Card START --> */  }
            <div className="col-sm-6 col-lg-12">
              <div className="card">
                { /* <!-- Card header START --> */  }
                <div className="card-header d-sm-flex justify-content-between align-items-center border-0">
                  <h5 className="card-title">Friends <span className="badge bg-danger bg-opacity-10 text-danger">230</span></h5>
                  <a className="btn btn-primary-soft btn-sm" href="#!"> See all friends</a>
                </div>
                { /* <!-- Card header END --> */  }
                { /* <!-- Card body START --> */  }
                <div className="card-body position-relative pt-0">
                  <div className="row g-3">

                    <div className="col-6">
                      { /* <!-- Friends item START --> */  }
                      <div className="card shadow-none text-center h-100">
                        { /* <!-- Card body --> */  }
                        <div className="card-body p-2 pb-0">
                          <div className="avatar avatar-story avatar-xl">
                            <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" /></a>
                          </div>
                          <h6 className="card-title mb-1 mt-3"> <a href="#!"> Amanda Reed </a></h6>
                          <p className="mb-0 small lh-sm">16 mutual connections</p>
                        </div>
                        { /* <!-- Card footer --> */  }
                        <div className="card-footer p-2 border-0">
                          <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Send message"> <i className="bi bi-chat-left-text"></i> </button>
                          <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove friend"> <i className="bi bi-person-x"></i> </button>
                        </div>
                      </div>
                      { /* <!-- Friends item END --> */  }
                    </div>

                    <div className="col-6">
                      { /* <!-- Friends item START --> */  }
                      <div className="card shadow-none text-center h-100">
                        { /* <!-- Card body --> */  }
                        <div className="card-body p-2 pb-0">
                          <div className="avatar avatar-xl">
                            <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" /></a>
                          </div>
                          <h6 className="card-title mb-1 mt-3"> <a href="#!"> Samuel Bishop </a></h6>
                          <p className="mb-0 small lh-sm">22 mutual connections</p>
                        </div>
                        { /* <!-- Card footer --> */  }
                        <div className="card-footer p-2 border-0">
                          <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Send message"> <i className="bi bi-chat-left-text"></i> </button>
                          <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove friend"> <i className="bi bi-person-x"></i> </button>
                        </div>
                      </div>
                      { /* <!-- Friends item END --> */  }
                    </div>

                    <div className="col-6">
                      { /* <!-- Friends item START --> */  }
                      <div className="card shadow-none text-center h-100">
                        { /* <!-- Card body --> */  }
                        <div className="card-body p-2 pb-0">
                          <div className="avatar avatar-xl">
                            <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /></a>
                          </div>
                          <h6 className="card-title mb-1 mt-3"> <a href="#"> Bryan Knight </a></h6>
                          <p className="mb-0 small lh-sm">1 mutual connection</p>
                        </div>
                        { /* <!-- Card footer --> */  }
                        <div className="card-footer p-2 border-0">
                          <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Send message"> <i className="bi bi-chat-left-text"></i> </button>
                          <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove friend"> <i className="bi bi-person-x"></i> </button>
                        </div>
                      </div>
                      { /* <!-- Friends item END --> */  }
                    </div>

                    <div className="col-6">
                      { /* <!-- Friends item START --> */  }
                      <div className="card shadow-none text-center h-100">
                        { /* <!-- Card body --> */  }
                        <div className="card-body p-2 pb-0">
                          <div className="avatar avatar-xl">
                            <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /></a>
                          </div>
                          <h6 className="card-title mb-1 mt-3"> <a href="#!"> Amanda Reed </a></h6>
                          <p className="mb-0 small lh-sm">15 mutual connections</p>
                        </div>
                        { /* <!-- Card footer --> */  }
                        <div className="card-footer p-2 border-0">
                          <button className="btn btn-sm btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Send message"> <i className="bi bi-chat-left-text"></i> </button>
                          <button className="btn btn-sm btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove friend"> <i className="bi bi-person-x"></i> </button>
                        </div>
                      </div>
                      { /* <!-- Friends item END --> */  }
                    </div>

                  </div>
                </div>
                { /* <!-- Card body END --> */  }
              </div>
            </div>
            { /* <!-- Card END --> */  }
    </>
  )
}
