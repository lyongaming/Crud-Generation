import userServices from "../services/users.services.mjs";

export const getUsers = async(_, res) => {
    const users = await userServices.getUsers();
    res.json(users);
};