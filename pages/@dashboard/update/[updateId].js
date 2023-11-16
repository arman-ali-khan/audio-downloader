import AdminLayout from "../../../Layout/AdminLayout";
import Update from "../../../components/Dashboard/Update/Update";

function updateId() {
    return (
        <AdminLayout title={'Update posts'}>
            <Update />
        </AdminLayout>
    );
}

export default updateId;