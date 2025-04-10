import { asyncHandler } from "../utils/asyncHandler.js";


const resgiterUser = asyncHandler ( async (req , res ) => {
    res.status(200).json({
        message: "ok"
    })
    
})

export { resgiterUser }