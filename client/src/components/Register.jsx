import React, { useEffect } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { RegisterValidations } from '../helper/formValidation/registerValidations';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { MdDeleteOutline, MdAddCircleOutline } from 'react-icons/md';

// start -- API & state manangement
import { useSelector, useDispatch } from 'react-redux';
import { GET_PRODUCT_LIST } from '../features/api/ProductAPI'; // API Call
import { setProductList } from '../features/slice/ProductSlice';
// end -- API & state manangement

const RegisterForm = ({title}) => {
  const dispatch = useDispatch();
  const { data, isLoading } = GET_PRODUCT_LIST();
  const USER = useSelector((state) => state.products);

  useEffect(()=>{
    if(data){
      dispatch(setProductList(data)); 
    }
  },[data]);

  const initialValues = { 
    fullName: '', 
    email: '', 
    password: '', 
    confirmPassword: '',
    phoneNumber: [],
    country: null,
    dateOfBirth: null
  };

  return (
    <div>
      <h1>{title}</h1>
       Length: {USER?.productList?.length}
      {isLoading ? <>Loading...</> :
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterValidations}
          onSubmit={(values, { setSubmitting }) => {
            console.log('values', JSON.stringify(values));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form>
              <div className="my-2">
                <Field type="text" placeholder="Full Name" name="fullName" className="border border-black" />
                <ErrorMessage name="fullName" component="div" className="text-red-600" />
              </div>

              <div className="my-2">
                <Field type="email" placeholder="Email" name="email" className="border border-black" />
                <ErrorMessage name="email" component="div" className="text-red-600" />
              </div>

              <div className="my-2">
                <Field placeholder="Password" type="password" name="password" className="border border-black" />
                <ErrorMessage name="password" component="div" className="text-red-600" />
              </div>

              <div className="my-2">
                <Field placeholder="confirm Password" type="password" name="confirmPassword" 
                  className="border border-black" />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-600" />
              </div>
            
              <div className="my-2">
                <div>Phone</div>
                <FieldArray name="phoneNumber">
                  {({ remove, push }) => (
                    <div>
                      {values.phoneNumber.map((phoneNumber, index) => (
                        <div key={index}>
                          <Field name={`phoneNumber.${index}`} className="border border-black" />
                          <button type="button" onClick={() => remove(index)}>
                            <MdDeleteOutline size={24}/>
                          </button>
                        </div>
                      ))}
                      <button type="button" onClick={() => push('')}>
                        <MdAddCircleOutline size={24} />
                      </button>
                    </div>
                  )}
                </FieldArray>
              </div>

              <div className="my-2">
                <div>Country</div>
                <Select
                  options={[
                    { value: 'usa', label: 'United States' },
                    { value: 'canada', label: 'Canada' }
                  ]}
                  value={values?.country}
                  onChange={(option) => setFieldValue('country', option)}
                />
                <ErrorMessage name="country" component="div" className="text-red-600" />
              </div>

              <div className="my-2">
                <div htmlFor="dateOfBirth">Date of Birth</div>
                <DatePicker
                  className='border border-black'
                  placeholderText="Date of Birth"
                  selected={values?.dateOfBirth}
                  onChange={(date) => setFieldValue('dateOfBirth', date)}
                  // dateFormat="MM/dd/yyyy h:mm aa" // Include both date and time format
                  // showTimeInput // Enable time picker
                  // dateFormat="MM/dd/yyyy"
                  dateFormat="MMM dd, yyyy" // Format for "Jan 23, 2024"
                />
                <ErrorMessage name="dateOfBirth" component="div" className="text-red-600" />
              </div>

              <button type="submit" disabled={isSubmitting}>
              Submit
              </button>
            </Form>
          )}
        </Formik>
      }
    </div>
  );
};

RegisterForm.propTypes = {
  title: PropTypes.string
};

export default RegisterForm;
