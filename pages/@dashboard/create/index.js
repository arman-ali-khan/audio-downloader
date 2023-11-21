import AdminLayout from "../../../Layout/AdminLayout";
import Create from "../../../components/Dashboard/Create/Create";
import PrivateRoutes from "../../../routes/PrivateRoutes";

function index() {
    return (
       <PrivateRoutes>
         <AdminLayout title={'Create New Episode'}>
           <Create />
        </AdminLayout>
       </PrivateRoutes>
    );
}

export default index;