import {getConnection} from "./../database/database"
import jwt from 'jsonwebtoken';

const login = async (req,res)=>{
    try{
        const {p_usuario,p_password} = req.body;
        if(p_usuario === undefined || p_usuario === undefined){
            res.status(400).json({message:"Bad request"});
        }else{
            const connection = await getConnection();
            const result = await connection.query("CALL IngresarSistema(?,?)",[p_usuario,p_password]);
            const data = result[0][0];
            const token = jwt.sign({data},'secretkey');
            res.json({data,token});
        }
    }
    catch (error){
        res.status(500);
        res.send(error.message);
    }
};

// const getUsuario = async (req, res) => {
//     try{
//         const {id} = req.params;
//         const connection = await getConnection();
//         const result = await connection.query("SELECT * FROM Usuario WHERE IdUsuario = ?",id);
//         res.json(result[0]);
//         //connection.end();
//     }catch(error){
//         res.status(500);
//         res.send(error);
//     }
// };

export const methods = {
    login
};