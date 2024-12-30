import { Button } from 'antd';
import { clearUser } from 'flux/reducers/auth';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <div>
      Dashboard
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Dashboard;
