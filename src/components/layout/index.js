

import React from 'react';
import Footer from './footer';
import Header from './header';
const Layout = ({children}) => {
    return (
        <div>

<div>
<Header/>
</div>


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
