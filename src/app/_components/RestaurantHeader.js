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

        </>
    )
}
export default RestaurantHeader;