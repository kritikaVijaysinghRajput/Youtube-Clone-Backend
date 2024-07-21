//By PROMISE method
const asyncHandler = () => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//By TRY CATCH method
// const asyncHandler = (fn) =>async (req,res,next){
//     try {
//         await fn(req, res, next)

//     } catch (error) {
//         res.status(err.code ||500).jso({
//             success:false,
//             message:err.message
//         })

//     }
// }
