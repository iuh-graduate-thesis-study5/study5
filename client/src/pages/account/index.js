import AccountTable from './AccountManager';
import AccountButtonComponent from './ActionButtonComponent';

export default function AccountComponent() {
    return (
        <>
            <AccountButtonComponent />
            <div>
                <h4>DANH SÁCH TÀI KHOẢN</h4>
                <AccountTable />
            </div>
        </>
    );
}
