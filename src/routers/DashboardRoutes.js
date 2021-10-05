import React, { } from 'react'
import { Switch } from 'react-router-dom'

import { NavBar } from '../components/ui/NavBar'


const DashboardRoutes = () => {



    return (
        < >
            <NavBar />
            <div className="">
                <Switch>
                    { /*<Route exact path="/marvel" component={MarvelScreen} / >*/}
                    {/*<Route exact path="/hero/:heroeId" component={HeroScreen} >*/}
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes
