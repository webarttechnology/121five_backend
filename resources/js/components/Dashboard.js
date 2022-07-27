import React, { useState, useEffect } from "react";

function Dashboard() {

    const [pendingNews, setPendingNews] = useState([]);
    const [commentsCount, setCommentsCount] = useState([]);
    const [newsCount, setNewsCount] = useState([]);
    const [sponsorCount, setSponsorCount] = useState([]);

    useEffect(() => {
        axios.get('/api/news/pending/count', {
            headers: {
                'Authorization': `${'ABCDEFGHIJK'}`
            }
        })
            .then(response => {
                setPendingNews(response.data)
            })
            .catch((error) => {
                console.error(error)
            })

            axios.get('/api/comments/count', {
                headers: {
                    'Authorization': `${'ABCDEFGHIJK'}`
                }
            })
                .then(response => {
                    setCommentsCount(response.data)
                })
                .catch((error) => {
                    console.error(error)
                })

                axios.get('/api/news/count', {
                    headers: {
                        'Authorization': `${'ABCDEFGHIJK'}`
                    }
                })
                    .then(response => {
                        setNewsCount(response.data)
                    })
                    .catch((error) => {
                        console.error(error)
                    })

                    axios.get('/api/sponsor/count', {
                        headers: {
                            'Authorization': `${'ABCDEFGHIJK'}`
                        }
                    })
                        .then(response => {
                            setSponsorCount(response.data)
                        })
                        .catch((error) => {
                            console.error(error)
                        })

      }, []);


    return (       
        <div className="app-content">
        <div className="section">
          <div className="page-header">
            <h4 className="page-title">Dashboard</h4>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#" className="text-light-color">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
          </div>
         <div className="row">
            <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="card bg-success">
                    <div className="card-body">
                        <div className="card-order">
                            <h6 className="mb-2">Our  Sponsors</h6>
                            <h2 className="text-right"><i className="fa fa-cart-plus mt-2 float-left"></i><span>{ sponsorCount }</span></h2>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="card bg-danger">
                    <div className="card-body">
                        <div className="card-widget">
                            <h6 className="mb-2">Total published News</h6>
                            <h2 className="text-right"><i className="fa fa-cart-plus mt-2 float-left"></i><span>{ newsCount }</span></h2>

                        </div>
                    </div>
                </div>
            </div>

              <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="card bg-info">
                    <div className="card-body">
                        <div className="card-widget">
                            <h6 className="mb-2">Total published comments</h6>
                            <h2 className="text-right"><i className="fa fa-cart-plus mt-2 float-left"></i><span>{ commentsCount }</span></h2>

                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="card bg-primary">
                    <div className="card-body">
                        <div className="card-widget">
                            <h6 className="mb-2">Pending News</h6>
                            <h2 className="text-right"><i className="fa fa-paper-plane mt-2 float-left"></i><span>{pendingNews}</span></h2>

                        </div>
                    </div>
                </div>
            </div>  
            </div>       
        
                </div>
       </div>
    )
}

export default Dashboard;