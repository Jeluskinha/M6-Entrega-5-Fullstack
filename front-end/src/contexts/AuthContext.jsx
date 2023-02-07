import { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [userInfo, setUserInfo] = useState();
  const [userListContacts, setUserListContacts] = useState();
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalregister, setOpenModalregister] = useState(false);
  const [openModalregisterContact, setOpenModalregisterContact] = useState(false);

  useEffect(() => {
    setOpenModalLogin(false);
    setOpenModalregister(false);
  }, []);

  const getUserInfo = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await api.get("client/me", config).then((res) => res);

      setUserInfo(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const login = async (data) => {
    try {
      const response = await api.post("session", data).then((res) => res);

      localStorage.setItem("@token", response.data.token);
      setToken(response.data.token);
      setOpenModalLogin(false);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    setToken(null);
    setUserListContacts(null);
  };

  const registerUser = async (data) => {
    const response = await api
      .post("client", data)
      .then((res) => res)
      .catch((error) => console.log(error.response.data.message));

    console.log(response);
    setOpenModalregister(false);
  };

  const registerContact = async (data) => {

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log(data)
    const response = await api
    .post("contacts", data, config)
    .then((res) => res)
    .catch((error) => console.log(error.response.data.message));

    console.log(response);
    setOpenModalregisterContact(false);
    getAllContacts()
  }

  const deleteContact = async (id) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await api
    .delete(`contacts/${id}`, config)
    .then((res) => res)
    .catch((error) => console.log(error.response.data.message));

    console.log(response)
    getAllContacts()
  }

  const getAllContacts = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await api.get("contacts", config).then((res) => res);

      setUserListContacts(response.data.contacts);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        userInfo,
        getUserInfo,
        getAllContacts,
        userListContacts,
        token,
        registerUser,
        registerContact,
        deleteContact,
        openModalLogin,
        setOpenModalLogin,
        openModalregister,
        setOpenModalregister,
        openModalregisterContact,
        setOpenModalregisterContact,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
