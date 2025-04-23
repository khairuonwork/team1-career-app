import Navbar from "@/components/common/navbar";

const NavbarLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    return(
        <>
            <Navbar/>
            {children}
        </>
    )
}

export default NavbarLayout;