import AdminLayout from "../../../Layout/AdminLayout";
import CreateCategory from "../../../components/Dashboard/Categories/CreateCategory";

function create() {
    return (
        <AdminLayout title={'Create category'}>
            <CreateCategory />
        </AdminLayout>
    );
}

export default create;