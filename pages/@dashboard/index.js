
import AdminLayout from "../../Layout/AdminLayout";
import Dashboard from "../../components/Dashboard/Dashboard";
import PrivateRoutes from "../../routes/PrivateRoutes";

function index() {
    return (
       <PrivateRoutes>
         <AdminLayout title={'Dashboard'}>
            <Dashboard />
        </AdminLayout>
       </PrivateRoutes>
    );
}

export default index;