import { Router } from "express";
import * as customer from '../Controllers/customer.controller';
import * as order from '../Controllers/order.controller';
import * as sign from '../Controllers/sign.controller';
import { auth } from '../Middleware/auth.middleware';

const routes = Router()

routes.post("/register", sign.register);
routes.post("/login", sign.login);

routes.get("/customer", auth, customer.listCustomer);
routes.put("/customer/:id", auth, customer.updateCustomer);
routes.delete("/customer/:id", auth, customer.deleteCustomer);

routes.post("/orders", auth, order.createOrder);
routes.get("/orders", auth, order.listOrders);

export default routes