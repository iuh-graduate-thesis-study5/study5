import QuestionTable from './QuestionTable';
import AccountButtonComponent from './ActionButtonComponent';

export default function AccountComponent() {
    return (
        <>
            <AccountButtonComponent />
            <div>
                <h4>DANH SÁCH CÂU HỎI</h4>
                <QuestionTable />
            </div>
        </>
    );
}
