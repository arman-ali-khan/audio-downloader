import AdminLayout from "../../../Layout/AdminLayout";
import Create from "../../../components/Dashboard/Create/Create";

function index() {
    return (
        <AdminLayout title={'Create New Episode'}>
           <Create />
        </AdminLayout>
    );
}

export default index;