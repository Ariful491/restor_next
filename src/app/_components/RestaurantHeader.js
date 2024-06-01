import Link from "next/link";

const RestaurantHeader = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img
                                src="/logo/food-delivery-app-removebg-preview.png"
                                 alt='brand logo'
                                style={{ height: '50px' }}
                            />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link href="/" className="nav-link active"> Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/restaurant" className="nav-link  ">
                                        Login /signup
                                    </Link>

                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        account
                                    </a>
                                    <ul className="dropdown-menu  w-25 border-0 shadow-sm  rounded-2" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default RestaurantHeader;