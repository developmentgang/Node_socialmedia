import React from 'react'

export default function ProfileExperienceCard() {
  return (
    <>
       { /*<!-- Card START --> */ }
       <div className='col-md-6 col-lg-12'> 
            <div className="card">
              { /*<!-- Card header START --> */ }
              <div className="card-header d-flex justify-content-between border-0">
                <h5 className="card-title">Experience</h5>
                <a className="btn btn-primary-soft btn-sm" href="#!"> <i className="fa-solid fa-plus"></i> </a>
              </div>
              { /*<!-- Card header END --> */ }
              { /*<!-- Card body START --> */ }
              <div className="card-body position-relative pt-0">
                { /*<!-- Experience item START --> */ }
                <div className="d-flex">
                  { /*<!-- Avatar --> */ }
                  <div className="avatar me-3">
                    <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/08.svg" alt="" /> </a>
                  </div>
                  { /*<!-- Info --> */ }
                  <div>
                    <h6 className="card-title mb-0"><a href="#!"> Apple Computer, Inc. </a></h6>
                    <p className="small">May 2015 – Present Employment Duration 8 mos <a className="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </a></p>
                  </div>
                </div>
                { /*<!-- Experience item END --> */ }

                { /*<!-- Experience item START --> */ }
                <div className="d-flex">
                  { /*<!-- Avatar --> */ }
                  <div className="avatar me-3">
                    <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/09.svg" alt="" /> </a>
                  </div>
                  { /*<!-- Info --> */ }
                  <div>
                    <h6 className="card-title mb-0"><a href="#!"> Microsoft Corporation </a></h6>
                    <p className="small">May 2017 – Present Employment Duration 1 yrs 5 mos <a className="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </a></p>
                  </div>
                </div>
                { /*<!-- Experience item END --> */ }

                { /*<!-- Experience item START --> */ }
                <div className="d-flex">
                  { /*<!-- Avatar --> */ }
                  <div className="avatar me-3">
                    <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/logo/10.svg" alt="" /> </a>
                  </div>
                  { /*<!-- Info --> */ }
                  <div>
                    <h6 className="card-title mb-0"><a href="#!"> Tata Consultancy Services. </a></h6>
                    <p className="small mb-0">May 2022 – Present Employment Duration 6 yrs 10 mos <a className="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </a></p>
                  </div>
                </div>
                { /*<!-- Experience item END --> */ }

              </div>
              { /*<!-- Card body END --> */ }
            </div>
          
          { /*<!-- Card END --> */ }
          </div>
    </>
  )
}
