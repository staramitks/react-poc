import React from 'react'

const UserContext = React.createContext("Test Default")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export  { UserProvider, UserConsumer}