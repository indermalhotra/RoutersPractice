import {Route} from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Products from './Pages/Products';
import { Switch } from 'react-router-dom';
import MainHeader from './Component/MainHeader';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <main>
      
      <MainHeader/>
          <Switch>
          <Route path="/welcome">
              <Welcome/>
          </Route>
          <Route path="/products" exact>
              <Products/>
          </Route>
          <Route path="/products/:productId">
              <ProductDetails/>
          </Route>
      </Switch>
   </main>
  );
}

export default App;
