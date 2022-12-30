import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TodosAppBar from '@layout/container/app-bar';
import ErrorPage from '@layout/container/error-page';

import AppHome from '@layout/container/home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ToDos from '@todos/container/todos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appTheme } from './themes/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppHome />,
    errorElement: <ErrorPage />,
  },
  { path: '/todos', element: <ToDos /> },
]);

const App = () => (
  <ThemeProvider theme={appTheme}>
    <CssBaseline enableColorScheme />
    <TodosAppBar></TodosAppBar>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
