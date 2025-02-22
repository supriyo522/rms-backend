const jwt=require("jsonwebtoken");
const authenticateToken = (req,res,next)=>{
    const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401); //Unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); //forbidden

    req.user = user;
    // console.log("User in middleware ", user); 
    next();
  });

};

module.exports = authenticateToken;
