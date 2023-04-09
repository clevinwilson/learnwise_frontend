import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import ChangePassword from '../../components/ChangePassword/ChangePassword';

function ChangePasswordPage() {
  return (
      <div className='relative '>
          <Sidebar teacher={true} />
          <Header role={'teacher'} />
          <div className='admin-page p-3 ' >
              <ChangePassword/>
          </div>
      </div>
  )
}

export default ChangePasswordPage