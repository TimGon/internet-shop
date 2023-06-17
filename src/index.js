import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthProvider } from "./components/Contexts/AuthContext";
import { BasketProvider } from './components/Contexts/BasketContext';
import { CategoryProvider } from './components/Contexts/CategoryContext';
import { ProductProvider } from './components/Contexts/ProductContext';
import { EditCategProvider } from './components/Contexts/EditCategContext';
import { OrderProvider } from './components/Contexts/OrderContext';
import { EditOrderProvider } from './components/Contexts/EditOrderContext';
import { EditProdProvider } from './components/Contexts/EditProdContext';
import { BrandProvider } from './components/Contexts/BrandContext';

import { YMaps } from '@pbe/react-yandex-maps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BasketProvider>
          <CategoryProvider>
            <ProductProvider>
              <EditCategProvider>
                <OrderProvider>
                  <EditOrderProvider>
                    <EditProdProvider>
                      <BrandProvider>
                        <YMaps>
                          <App />
                        </YMaps>
                      </BrandProvider>
                    </EditProdProvider>
                  </EditOrderProvider>
                </OrderProvider>
              </EditCategProvider>
            </ProductProvider>
          </CategoryProvider>
        </BasketProvider>
      </AuthProvider> 
    </BrowserRouter>
  </React.StrictMode>
);

