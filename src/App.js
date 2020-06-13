import React, { Fragment, useEffect } from "react";
import Landing from "./Components/Landing/Landing";
import { Route } from "react-router-dom";

const App = () => {
    return (
        <Fragment>
            <Route path="/" exact render={() => <Landing />} />
        </Fragment>
    );
};

export default App;
