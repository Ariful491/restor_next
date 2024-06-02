import RestaurantHeader from "@/app/_components/RestaurantHeader";
import Footer from "@/app/_components/Footer";
import BoostrapClient from "@/app/_components/BootstrapClient";

const AppLayout = ({children}) => {
    return (
        <>
            <RestaurantHeader/>
            {children}
            <Footer/>
            <BoostrapClient/>
        </>
    )
}

export default AppLayout;