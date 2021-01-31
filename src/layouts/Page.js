import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Error from '../pages/Error';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/about" exact component={About} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
            </Switch>
        </>

    );
}

export default Page;