import React from 'react';
import { Admin, Resource,ListGuesser  } from 'react-admin';
import { Orcamento } from './pages/orcamento';
import Dash  from "./pages/dash";


import './style.css'

//dados api
import dataProvider from "./data";

//autenticação e login
import authProvider from './authProvider';

//tradução
import ptBrMessages from 'ra-language-pt-br';
import polyglotI18nProvider from 'ra-i18n-polyglot';
const i18nProvider = polyglotI18nProvider(() => ptBrMessages, 'pt-br');




//app
const App = () => (
      <Admin dashboard={Dash} dataProvider={dataProvider} authProvider={authProvider}  i18nProvider={i18nProvider} locale="pt-br">
          <Resource name="orcamento" list={Orcamento}  />
          <Resource name="posts" list={ListGuesser}  />
      </Admin>
  );

  export default App;