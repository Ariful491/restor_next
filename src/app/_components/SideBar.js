import Link from "next/link";

const sideBar = () => {
    return (
        <>
            <div className={'side-bar'}>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <Link href="/restaurant/dashboard" className="accordion-button text-decoration-none">
                                Home
                            </Link>
                        </h2>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Food
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse bg-success collapse"
                             aria-labelledby="headingTwo"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body p-0 ms-4 m-0">
                                <ul className="list-group ">
                                    <Link href="/restaurant/food"
                                          className="bg-success  bg-opacity-75  text-decoration-none text-white rounded-2 ">
                                        <li className="list-group-item border-0 text-white text-decoration-none  bg-transparent">
                                            Add Food
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default sideBar;