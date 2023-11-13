
import AdminLayout from "../../Layout/AdminLayout";
import Dashboard from "../../components/Dashboard/Dashboard";

function index() {
    return (
        <AdminLayout title={'Dashboard'}>
            <Dashboard />
        </AdminLayout>
    );
}

export default index;