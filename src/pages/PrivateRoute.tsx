import { ReactNode } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface IProps {
    children: ReactNode,
    [x: string]: any,
}

export const PrivateRoute = (props: IProps) => {
    const context = useAuth();
    const { children, ...rest } = props;

    return (
        <Route
            {...rest}
            render={({ location }) => context.authentication?.access_token ?
                (children)
                :
                (<Redirect to={{ pathname: "/login", state: { from: location } }} />)
            }
        />
    );
}