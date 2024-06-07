import AppLayout from "@/app/_components/layouts/App";
import SideBar from "@/app/_components/SideBar";

const AuthLayout = ({children}) => {
    return (
        <>
            <AppLayout >
                <SideBar/>
                <main className='left-nav-visible'>
                    {children}
                </main>
            </AppLayout>
        </>
    )
}

export default AuthLayout;