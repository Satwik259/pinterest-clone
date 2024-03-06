const express = require("express")
const router = express.Router()
const authRoutes = require("./auth")
const rootRoutes = require("./root")

// api/auth && api/root

const routes = [
    {
      path :"/auth",
      routes : authRoutes,
    },
    {
      path : "/root",
      routes : rootRoutes,
    }
]

routes.forEach((route)=>{
     router.use(route.path,route.routes)
})


module.exports=router