import { useRouteError } from "react-router-dom"

function NotFound(){

              const err = useRouteError();
              return (
                            <>
                            <h1>Opps!!</h1>
                            <h1>{err.status}</h1>
                            <h2>{err.statusText}</h2>
                            <h2>{err.data}</h2>
                            </>
              )
}

export default NotFound;