import { createContext, ReactNode, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Authentication } from '../interfaces/Authentication';
import * as AuthService from '../services/AuthService';

interface IAuthContext {
    authentication: Authentication | undefined,
    logIn: (params: { email: string, password: string }) => Promise<void>,
}

export const AuthContext = createContext({} as IAuthContext);

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = (props: AuthContextProviderProps) => {
    const [authentication, setAuthentication] = useState<Authentication>();
    const history = useHistory();

    const logIn = async (params: { email: string, password: string }) => AuthService.login(params)
        .then(setAuthentication)
        .then(() => history.push('/list'));

    return (
        <AuthContext.Provider value={{ authentication, logIn }}>
            {props.children}
        </AuthContext.Provider>
    );
}