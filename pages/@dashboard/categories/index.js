import AdminLayout from "../../../Layout/AdminLayout";
import Categories from "../../../components/Dashboard/Categories/Categories";

function index() {
    return (
        <AdminLayout title={'Categories'}>
            <Categories />
        </AdminLayout>
    );
}

export default index;