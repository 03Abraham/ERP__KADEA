import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { Icon } from "@iconify/react";
import illustration from '../../assets/illustration.svg'
import line1 from '../../assets/line1.svg'
import line2 from '../../assets/line2.svg'
import Google from '../../assets/Google.svg'
import { TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import "./Signin.scss";


const Signin = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors
  } = useForm();  

  const onSubmit = (data) => {
    console.log(data);

    // Réinitialiser le formulaire
    reset();
    clearErrors();
  }
  
  const [showPassword, setShowPassword] = useState()

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
     <div className="login-container">
         <div className="sidebar">
            <div className="menu-logo">
              <span className="menu-logo-span">
                <Icon icon="ion:analytics" className="logo" /> 
              </span>
            </div>
            <h2>Log in</h2>

             <Button  className='btn-google'>
               <img src={Google} alt="logo" className='img' />
               Google
             </Button>
         
          <div className='Or'>
            <div className='overlap-group'>
              <div className='line'>
                <img className='line1' alt={'Line'} src={line1}/>
                <span className='text-wrapper'> Or</span>
                <img className='line2' alt={'Line'} src={line2}/>
              </div>
            </div>
          </div>

             <form onSubmit={handleSubmit(onSubmit)}>
             {/* Champs de formulaire pour l'adresse e-mail */}
              <div className="Email_box">
                 <TextField
                   {...register('email', { required: true })}
                   label="Email"
                   variant="outlined"
                   className='input'
                   error={errors.email ? true : false}
                   helperText={errors.email ? 'L\'email est requis' : ''}
                 />
               </div> 
     
               {/* Champs de formulaire pour le mot de passe */}
               <div className="password-container">
                 <TextField
                   {...register('password', { required: true })}
                   label="Mot de passe"
                   type={showPassword ? 'text' : 'password'}
                   variant="outlined"
                   error={errors.password ? true : false}
                   className='input'
                   helperText={errors.password ? 'Le mot de passe est requis' : ''}
                   InputProps={{
                     endAdornment: (
                       <InputAdornment position="end">
                         <IconButton onClick={handleClickShowPassword}>
                           {showPassword ? <VisibilityOff /> : <Visibility />}
                         </IconButton>
                       </InputAdornment>
                     )
                   }}
                 />
               </div>  
     
               {/* Checkbox pour se souvenir de l'utilisateur */}
             <div className="reset_Psw">
                <div className="remember-me">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
       
                {/* Texte pour réinitialiser le mot de passe */}
               <div className="reset-password">
                  <p>
                   <NavLink to="/ResetPassword" activeClassName="active">Reset password</NavLink>
                 </p>
               </div>
             </div>  
     
               <Button variant="contained" type="submit" className="button">Log in</Button>
               <div className="New_Account">
                 <p>Don’t have account yet?</p>
                 <p>
                   <NavLink to="/Signup" activeClassName="active">New Account</NavLink>
                 </p>
               </div>
             </form>
         </div>
         <div className='illustration' >
           <img src={illustration} alt="logo" className='img' />
         </div>
    </div>
  );
};

export default Signin;