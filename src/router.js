import { lazy } from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import { getRecipe } from './apis/recipe';

const Homepage = lazy(() => {
    return import('./pages/Homepage/Homepage');
});

const Admin = lazy(() => {
    return import('./pages/Admin/Admin');
});

const AdminRecipes = lazy(() => {
    return import('./pages/Admin/pages/AdminRecipes/AdminRecipes.js');
});

const AdminUsers = lazy(() => {
    return import('./pages/Admin/pages/AdminUsers/AdminUsers');
});

const AdminRecipesList = lazy(() => {
    return import(
        './pages/Admin/pages/AdminRecipes/pages/AdminRecipesList/AdminRecipesList'
    );
});

const AdminRecipesForm = lazy(() => {
    return import(
        './pages/Admin/pages/AdminRecipes/pages/AdminRecipesForm/AdminRecipesForm'
    );
});

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: 'admin',
                element: <Admin />,
                children: [
                    {
                        path: 'recipes',
                        element: <AdminRecipes />,
                        children: [
                            {
                                index: true,
                                loader: async () => redirect('list'),
                            },
                            {
                                path: 'list',
                                element: <AdminRecipesList />,
                            },
                            {
                                path: 'new',
                                element: <AdminRecipesForm />,
                            },
                            {
                                path: 'edit/:recipeId',
                                loader: async ({ params: { recipeId } }) =>
                                    getRecipe(recipeId),
                                element: <AdminRecipesForm />,
                            },
                        ],
                    },
                    {
                        path: 'users',
                        element: <AdminUsers />,
                    },
                    {
                        index: true,
                        loader: async () => redirect('recipes'),
                    },
                ],
            },
        ],
    },
]);
