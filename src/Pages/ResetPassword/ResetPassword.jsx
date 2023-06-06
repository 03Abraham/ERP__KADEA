import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Icon } from "@iconify/react";
import { TextField, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./ResetPassword.scss";

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false); // État pour afficher le chargement
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    // Vérification de l'adresse e-mail avec une expression régulière
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(data.email);

    if (!isValidEmail) {
      toast.error("Veuillez saisir une adresse e-mail valide.", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 5000,
      });
      return;
    }

    // Logique de demande de réinitialisation du mot de passe
    try {
      setIsLoading(true);
      // Exécution de la demande de réinitialisation du mot de passe

      // Affichage du message de succès
      toast.success("Veuillez vérifier votre boîte mail pour réinitialiser votre mot de passe.", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 5000,
      });
    } catch (error) {
      // Gestion des erreurs
      toast.error("Une erreur s'est produite. Veuillez réessayer.", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
      reset(); // Réinitialiser le formulaire
    }
  };

  return (
    <div className="reset-container">
      <div className="popup-card">
        <div className="card-header">
          <Icon icon="ion:analytics" className="logo" />
          <h2>Recover</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Champ de formulaire pour l'adresse e-mail */}
          <div className="email-box">
            <TextField
              {...register('email', { required: true })}
              label="Email"
              variant="outlined"
              className="input"
              error={errors.email ? true : false}
              helperText={errors.email ? 'L\'email est requis' : ''}
            />
          </div>

          <Button variant="contained" type="submit" className="button" disabled={isLoading}>
            {isLoading ? 'Chargement...' : 'Reset password'}
          </Button>
        </form>
      </div>

      {/* Pop-up de notification */}
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;