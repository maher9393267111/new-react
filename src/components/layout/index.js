

import React from 'react';
import Footer from './footer';
const Layout = ({children}) => {
    return (
        <div>


<div>
    {children}
</div>


<div>

    <Footer />
</div>

            
        </div>
    );
}

export default Layout;
