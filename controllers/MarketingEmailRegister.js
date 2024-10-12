import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();

export const MarketingEmailRegister = async (req,res) => {

    const { name, email } = req.body;
    const createdAt = new Date();

    try{

    const result = await prisma.UsersMarketingEmail.create({

        data: {

            name,
            email,
            createdAt 
        }

    })

    res.status(201).json(result);

    }
    catch(error){

        console.error('Error al guardar los datos:', error);
        res.status(500).json({
            error: 'Error al guardar los datos',
            details: error.message
        });
    }

}