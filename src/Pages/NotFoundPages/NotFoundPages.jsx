import React from "react";
import { Button, Result } from 'antd';
 import { useNavigate } from 'react-router-dom';
// import { NotFound } from "../../components/NotFound/NotFound";



export const NotFoundPage = () => {


    // return <div>Не туда попали</div>;
   const navigate = useNavigate();

     return (
    <>
      <Result
    status="404"
    title="404"
    subTitle="Извините, эта страница не существует."
    extra={<Button type="primary" onClick={() => navigate("/")}>На главную</Button>}
  />    
</>
   );
};
