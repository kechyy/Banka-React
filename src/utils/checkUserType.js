import jwtDecode from 'jwt-decode';

const checkUserType = () => {
  const token = localStorage.getItem('Authorization');
  if (token) {
    const { exp, iat, ...userData } = jwtDecode(token);
    if (exp * 1000 > new Date().getTime()) {
      switch (userData.usertype) {
        case 'admin': return 'admin/adminPage.html';
          break;
        case 'client': return '/client';
          break;
        case 'cashier': return  'cashier/cashierPage.html';
          break;
        case 'staffAdmin': return 'staffAdmin/staffAdminPage.html';
          break;
      }
    }
  }
  
}
export default checkUserType;