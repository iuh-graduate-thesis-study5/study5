// project import
import pages from './pages';
import page_teacher from './pages_teacher';
import dashboard from './dashboard';
import utilities from './utilities';
import support from './support';

// ==============================|| MENU ITEMS ||============================== //

let listRoute = [dashboard, pages];
if (localStorage.getItem('authenticate')) {
    let a = JSON.parse(localStorage.getItem('authenticate'));
    if (a.role === 'TEACHER') {
        listRoute = [dashboard, page_teacher];
    }
}

const menuItems = {
    items: listRoute
};

export default menuItems;
