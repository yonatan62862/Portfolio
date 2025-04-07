import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/LayoutArea/Layout';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './Context/ThemeContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <BrowserRouter>
        <ThemeProvider>
            <Layout />
        </ThemeProvider>
    </BrowserRouter>
);


reportWebVitals();