import React, {useState} from 'react';

// start -- API & state manangement
import { useSelector, useDispatch } from 'react-redux';
import { setDeleteProductList } from '../features/slice/ProductSlice';
// end -- API & state manangement

import { UseRequest } from '../features/useRequest';
import { ROUTES_PRODUCTS } from '../helper/routes';

const Login = () => {
  const dispatch = useDispatch();
  const PRODUCT = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false);

  const getProduct = (id) => {
    setIsLoading(true);
    UseRequest(`${ROUTES_PRODUCTS}/${id}`)
      .then(data => {
        console.log('Data', data);
      }).catch(error => {
        console.log('erroror 22', error);
      }).finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      Login
      <div onClick={()=> dispatch(setDeleteProductList())} >Delete ALL</div>
      {isLoading ? <div>Loading...</div> : 
        <>
          {PRODUCT?.productList?.map(data=>(
            <div key={data?.id} onClick={()=> getProduct(data?.id)} 
              className="border border-black p-2 cursor-pointer">
              {data?.id}
            </div>
          ))}
        </>}
      
    </div>
  );
};

export default Login;