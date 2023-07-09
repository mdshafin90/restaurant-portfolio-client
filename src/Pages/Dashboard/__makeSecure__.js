/**
 * --------------
 *      BASIC
 * ---------------
 * 1. -> do not show the link to them who should not see it
 *   1.2 -> only show to the person/types of user who should see it
 * 2. Do not allow to visit the link by typing on the url. 
 * 3.use AdminRoute that will check whether the user is admin or not
 * 4. if not admin then redirect to any other page. you could logout user 
 * 5. and send them to the login page as well.
 * --------------------------
 *      TO SEND DATA
 * ---------------------------
 * 1. -> verify jwt token (send authorization token in the header to the server). 
 *   1.2. -> If possible use axios to send jwt token by intercepting the request
 * 2. if it is an admin activity. Make sure only admin user is posting data
 * 3. by using verifyAdmin
 * 
*/

/**
 * -------------------
 *  React Form code
 * -------------------
 * 
 * import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" />

      <input type="submit" />
    </form>
  );
}
 * */ 