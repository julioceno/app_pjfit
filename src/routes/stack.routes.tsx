import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import { LandingPage } from "../pages/LandingPage";
import { Register } from "../pages/Register";
import { CreatePassword } from "../pages/CreatePassword";
import { ConfirmPassword } from "../pages/ConfirmPassword";
import { Login } from "../pages/Login";
import { Page } from "../pages/Page";

import colors from "../styles/colors";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => ( // React.FC === React Function Components é a tipagem da função
    <stackRoutes.Navigator // Configurações de navegação do stackRoutes
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
        }}
    >

    <stackRoutes.Screen 
        name="LandingPage" 
        component={LandingPage}
    />

    <stackRoutes.Screen 
        name="Register" 
        component={Register}
    />

    <stackRoutes.Screen 
        name="CreatePassword" 
        component={CreatePassword}
    />

    <stackRoutes.Screen 
        name="ConfirmPassword" 
        component={ConfirmPassword}
    />

    <stackRoutes.Screen 
        name="Login" 
        component={Login}
    />


    <stackRoutes.Screen 
        name="Page" 
        component={Page}
    />
       
    </stackRoutes.Navigator>

)

export default AppRoutes;