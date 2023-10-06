import Header from "./Header";
import Footer from "./Footer";

export default function Layout ({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            {/* {width < 601 && <MobileFooter/>} */}

        </>
    )
}
