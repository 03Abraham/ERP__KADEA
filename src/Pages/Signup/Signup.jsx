import React from 'react';
import { useForm } from 'react-hook-form';
import { Icon } from "@iconify/react";
import { NavLink } from 'react-router-dom';
import illustration from '../../assets/illustration1.svg'
import line1 from '../../assets/line1.svg'
import line2 from '../../assets/line2.svg'
import Google from '../../assets/Google.svg'
import { TextField, Button, IconButton, InputAdornment} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Signup.scss";


const Signup = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors },
    reset, // Ajout de la fonction reset
  } = useForm();
  

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Réinitialisation du formulaire après soumission
    showNotification();
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
 
 /**
 * Affiche une notification de succès pour l'inscription réussie.
 */
  const showNotification = () => {
    toast.success("Congratulations! You are now registered successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="signup-container">
      <div className="sidebar">
        <div className="menu-logo">
          <span className="menu-logo-span">
            <Icon icon="ion:analytics" className="logo" /> 
          </span>
        </div>
        <h2>Sign up</h2>

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
          {/* Champs de formulaire pour le nom complet */}
          <div className="full-name-box">
            <TextField
              {...register('fullName', { required: true })}
              label="Name"
              variant="outlined"
              className='input'
              error={errors.fullName ? true : false}
              helperText={errors.fullName ? 'Le nom complet est requis' : ''}
            />
          </div> 

          {/* Champs de formulaire pour l'adresse e-mail */}
          <div className="email-box">
            <TextField
              {...register('email', { required: true })}
              label="Email"
              variant="outlined"
              className='input'
              error={errors.email ? true : false}
              helperText={errors.email ? 'L\'email est requis' : ''}
            />
          </div> 

          {/* Champs de formulaire pour le nom de l'entreprise */}
          <div className="company-name-box">
            <TextField
              {...register('companyName', { required: true })}
              label="Company Name"
              variant="outlined"
              className='input'
              error={errors.companyName ? true : false}
              helperText={errors.companyName ? 'Le nom de l\'entreprise est requis' : ''}
            />
          </div> 

          {/* Champ de formulaire pour la photo de profil */}
          <div className="profile-photo-box">
            <label htmlFor="profilePhoto">profil</label>
            <input
              {...register('profilePhoto')}
              type="file"
              accept="image/*"
              id="profilePhoto"
              className='input'
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
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Se souvenir de moi</label>
          </div>
               
          {/* Bouton d'inscription */}
          <Button variant="contained" type="submit" className="btn">Sign up</Button>

          {/* Texte pour créer un nouveau compte */}
          <div className="new-account">
            <p>Already have an account?</p>
            <p>
             <NavLink to="/" activeClassName="active">Log in</NavLink>
            </p>
          </div>
        </form>
      </div> 
      <div className='illustration'>
        <img src={illustration} alt="logo" className='img' />
      </div>
         
      {/* Notification */}
      <ToastContainer />

    </div>
  );
};

export default Signup;