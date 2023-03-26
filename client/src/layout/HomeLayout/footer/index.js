import logo from '../../../assets/logo/logo.png';

export default function Footer() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', borderTop: '1px solid #e1e1e1', padding: '1rem 0' }}>
            <div style={{ width: '80%' }}>
                <img style={{ width: '6rem' }} src={logo} alt="logo" />
                <h3>Địa chỉ</h3>
                <p>Số 12 Nguyễn Văn Bảo, Phường 4, Gò Vấp, Thành phố Hồ Chí Minh.</p>
                <p>
                    @ 2023 - Bản quyền thuộc nhóm đồ án tốt nghiệp sinh viên Trần Hữu Thọ, Huỳnh Võ Hoàng Long - Trường Đại học Công Nghiệp
                    Thành phố Hồ Chí Minh.
                </p>
            </div>
        </div>
    );
}
