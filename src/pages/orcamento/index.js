import React from 'react';
import { List, Datagrid, TextField, EmailField  } from 'react-admin';


export const Orcamento = props => 
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="nome" />
                <EmailField source="email" />
                <TextField source="tiposervico" />
                <TextField source="telefone" />
                <TextField source="tipodev" />
                <TextField source="prefctt" />
                <TextField source="comonosconheceu"/>
            </Datagrid>
        </List>
    