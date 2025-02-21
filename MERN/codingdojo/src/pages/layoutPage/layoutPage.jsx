import MyHeader from "../../components/myHeader";
import MyFooter from "../../components/myFooter";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
    return(
        <>
            <MyFooter></MyFooter>
            <Outlet/>
            <MyHeader></MyHeader>
        </>
    )
}

export default LayoutPage;