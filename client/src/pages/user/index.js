import UserTable from './UserTable';
import AccountButtonComponent from './ActionButtonComponent';

export default function AccountComponent() {
    return (
        <>
            <AccountButtonComponent />
            <div>
                <h4>DANH SÁCH NGƯỜI DÙNG</h4>
                <UserTable />
            </div>
        </>
    );
}
