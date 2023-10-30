import React, { useEffect } from 'react'

export default function Pricing() {
   
    return (
        <>
            <section className="bg-light text-gray-600 py-5">
                <div className="container py-5">
                    <div className="row" >
                        <div className="col-lg-12 text-center mb-5">
                            <h1 className="display-4 mb-4 text-dark">Buy Premium</h1>
                            <p className="lead">Buy Premium subscription to get access of different categories on news</p>

                        </div>
                            <div className="col-lg-3 col-md-6" >
                                <div className="card mb-4 rounded-lg border border-primary">
                                    <div className="card-body p-4">
                                        <h2 className="h6 mb-2 text-uppercase font-weight-bold">Monthly</h2>
                                        <h1 className="display-4 text-dark mb-4">
                                            <span class="font-weight-normal">Rs 50</span>
                                        </h1>
                                        <p className="text-gray-600 mb-2">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </span>
                                            Bussiness News
                                        </p>
                                        <p className="text-gray-600 mb-2">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </span>
                                            Technology News
                                        </p>
                                        <p className="text-gray-600 mb-2">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </span>
                                            Science News
                                        </p>
                                        <p className="text-gray-600 mb-6">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </span>
                                            Entertainment News
                                        </p>
                                        <button className="btn btn-primary btn-block">Buy Now</button>
                                        <p className="small text-gray-600 mt-3">
And many more categories.......                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card mb-4 rounded-lg border border-secondary">
                                    <div className="card-body p-4">
                                        <h2 className="h6 mb-2 text-uppercase font-weight-bold">Half-Yearly</h2>
                                        <h1 className="display-4 text-dark mb-4">
                                            <span class="font-weight-normal">Rs 200</span>
                                        </h1>
                                       
                                        <p className="text-gray-600 mb-2">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </span>
                                            Technology News
                                        </p>
                                        <p className="text-gray-600 mb-2">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </span>
                                            Science News
                                        </p>
                                        <p className="text-gray-600 mb-2">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </span>
                                            Bussiness News
                                        </p>
                                        <p className="text-gray-600 mb-6">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </span>
                                            Entertainment News
                                        </p>
                                        <button className="btn btn-primary btn-block">Buy Now</button>
                                        <p className="small text-gray-600 mt-3">
And many more categories.......                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="card mb-4 rounded-lg border border-secondary">
                                    <div className="card-body p-4">
                                        <h2 className="h6 mb-2 text-uppercase font-weight-bold">Yearly</h2>
                                        <h1 className="display-4 text-dark mb-4">
                                            <span class="font-weight-normal">Rs 300</span>
                                        </h1>
                                       
                                        <p className="text-gray-600 mb-2">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </span>
                                            Technology News
                                        </p>
                                        <p className="text-gray-600 mb-2">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </span>
                                            Science News
                                        </p>
                                        <p className="text-gray-600 mb-2">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </span>
                                            Bussiness News
                                        </p>
                                        <p className="text-gray-600 mb-6">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                            </span>
                                            Entertainment News
                                        </p>
                                        <button className="btn btn-primary btn-block">Buy Now</button>
                                        <p className="small text-gray-600 mt-3">
And many more categories.......                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

        </>
    )
}