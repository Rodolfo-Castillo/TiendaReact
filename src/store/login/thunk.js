//Aqui hacen las peticiones de la base de datos
import { createAsyncThunk } from '@reduxjs/toolkit'
import { HttpPost } from '../../configs/axios'

export const login = createAsyncThunk(
    'auth/login',
    async (data,{dispatch}) => {          
        const params = {
                    p_usuario: data.user,
                    p_password: data.password,
                }
        localStorage.removeItem('token');  
        const  res = await HttpPost('login/', params, dispatch);
        return res
        
    }
)
