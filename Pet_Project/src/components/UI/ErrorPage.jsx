import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div style={{textAlign: "center"}}>
        <h1>Ooops! An error occured!</h1>
        <p>Sorry, an error has occured</p>
        <p> 
            <i>
                {error.statusText || error.message}
            </i>
        </p>
        </div>
    );
};

export default ErrorPage;