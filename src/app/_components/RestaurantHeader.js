"use client"
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter, usePathname} from "next/navigation";

const RestaurantHeader = () => {

    const router = useRouter();
    const userPathName = usePathname();
    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        let data = localStorage.getItem('user');

        if (!data && userPathName === '/restaurant/dashboard') {
            router.push('/restaurant');
        } else if (data && userPathName === '/restaurant') {
            router.push('/restaurant/dashboard');
        } else {
            setUserDetails(JSON.parse(data));
        }

    }, []);


    const handleLogout = () => {
        localStorage.removeItem('user');
        setUserDetails(null);
        router.push('/restaurant');
    }


    return (
        <>
            <div className='top-bar'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <div className="container">
                        <Link className="navbar-brand" href="/">
                            <img
                                src="/logo/food-delivery-app-removebg-preview.png"
                                alt='brand logo'
                                style={{height: '50px'}}
                            />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            {
                                !userDetails ?
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                               role="button"
                                               data-bs-toggle="dropdown" aria-expanded="false">
                                                Category
                                            </a>
                                            <ul className="dropdown-menu  w-25 border-0 shadow-sm  rounded-2"
                                                aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    : ''
                            }


                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {
                                    !userDetails?.name ?

                                        <>
                                            <li className="nav-item">
                                                <Link href="/" className="nav-link active"> Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/restaurant" className="nav-link  ">
                                                    Login /signup
                                                </Link>

                                            </li>
                                        </>
                                        :

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                               role="button"
                                               data-bs-toggle="dropdown" aria-expanded="false">
                                                {userDetails?.name}
                                            </a>
                                            <ul className="dropdown-menu  w-25 border-0 shadow-sm  rounded-2"
                                                aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item"
                                                          href="/restaurant/dashboard">Dashboard</Link></li>
                                                <li><a className="dropdown-item" href="#">Profile</a></li>

                                                <li className='dropdown-divider'></li>
                                                <li><a className="dropdown-item" onClick={handleLogout}
                                                       href="#">Logout</a></li>
                                            </ul>
                                        </li>
                                }

                            </ul>


                        </div>


                    </div>
                </nav>
            </div>
            {/*<div className={'side-bar'} >*/}
            {/*    <div className="accordion" id="accordionExample">*/}
            {/*        <div className="accordion-item">*/}
            {/*            <h2 className="accordion-header"  >*/}
            {/*                <button className="accordion-button" type="button"  >*/}
            {/*                    Accordion Item #1*/}
            {/*                </button>*/}
            {/*            </h2>*/}
            {/*        </div>*/}
            {/*        <div className="accordion-item">*/}
            {/*            <h2 className="accordion-header" id="headingTwo">*/}
            {/*                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"*/}
            {/*                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">*/}
            {/*                    Accordion Item #2*/}
            {/*                </button>*/}
            {/*            </h2>*/}
            {/*            <div id="collapseTwo" className="accordion-collapse bg-success collapse" aria-labelledby="headingTwo"*/}
            {/*                 data-bs-parent="#accordionExample">*/}
            {/*                <div className="accordion-body p-0 ms-4 m-0">*/}
            {/*                    <ul className="list-group  ">*/}
            {/*                        <a href="" className="bg-success text-decoration-none text-white rounded-2 ">*/}
            {/*                            <li className="list-group-item text-white text-decoration-none  bg-transparent">*/}
            {/*                                Category !*/}
            {/*                            </li>*/}

            {/*                        </a>*/}
            {/*                        <a href="" className="bg-success text-decoration-none text-white rounded-2 ">*/}
            {/*                            <li className="list-group-item text-white text-decoration-none  bg-transparent">*/}
            {/*                                Category !*/}
            {/*                            </li>*/}

            {/*                        </a>*/}
            {/*                        <a href="" className="bg-success text-decoration-none text-white rounded-2 ">*/}
            {/*                            <li className="list-group-item text-white text-decoration-none  bg-transparent">*/}
            {/*                                Category !*/}
            {/*                            </li>*/}

            {/*                        </a>*/}

            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="accordion-item">*/}
            {/*            <h2 className="accordion-header" id="headingThree">*/}
            {/*                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"*/}
            {/*                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">*/}
            {/*                    Accordion Item #3*/}
            {/*                </button>*/}
            {/*            </h2>*/}
            {/*            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"*/}
            {/*                 data-bs-parent="#accordionExample">*/}
            {/*                <div className="accordion-body">*/}
            {/*                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until*/}
            {/*                    the collapse plugin adds the appropriate classes that we use to style each element.*/}
            {/*                    These classes control the overall appearance, as well as the showing and hiding via CSS*/}
            {/*                    transitions. You can modify any of this with custom CSS or overriding our default*/}
            {/*                    variables. It's also worth noting that just about any HTML can go within*/}
            {/*                    the <code>.accordion-body</code>, though the transition does limit overflow.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}
export default RestaurantHeader;