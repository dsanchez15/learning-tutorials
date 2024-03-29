import { useState, useEffect, forwardRef } from 'react'
import MaterialTable from 'material-table';

import apiProducts from '../../APIs/productsAPI';
import productsColumns from '../../data/productsColumns';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function DataTableComponent(props) {
    //const [columns, setColumns] = useState(productsColumns);
    const [data, setData] = useState();

    const getData = async () => {
        const dataApi = await apiProducts.getProducts.list();
        console.log(dataApi);
        setData(dataApi);
    }

    const deleteData = async (id) => {
        const deleteApi = await apiProducts.getProducts.delete(id);
        console.log(deleteApi);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <MaterialTable
            title="Lista de Productos"
            columns={productsColumns}
            data={data}
            icons={tableIcons}
            options={{ actionsColumnIndex: -1 }}
            localization={{
                pagination: {
                    labelRowsSelect: 'filas',
                },
                toolbar: {
                    searchTooltip: 'Buscar',
                    searchPlaceholder: 'Buscar',
                },
                header: {
                    actions: 'Acciones'
                },
                body: {
                    addTooltip: 'Agregar Usuario',
                    deleteTooltip: 'Eliminar Usuario',
                    editTooltip: 'Editar Usuario',
                    editRow: {
                        deleteText: '¿Estás seguro de eliminar este usuario?',
                        cancelTooltip: 'Cancelar',
                        saveTooltip: 'Guardar'
                    },
                    emptyDataSourceMessage: 'No hay registros que mostrar.',
                    filterRow: {
                        filterTooltip: 'Filter'
                    }
                }
            }}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        async function postData(url = '', dataALL = { newData }) {
                            const response = await fetch(url, {
                                method: 'POST',
                                mode: 'cors',
                                cache: 'no-cache',
                                credentials: 'same-origin',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                redirect: 'follow',
                                referrerPolicy: 'no-referrer',
                                body: JSON.stringify(newData)
                            });
                            return response.json();
                        }

                        postData('http://localhost:3002/api/users')
                            .then(dataALL => {
                                console.log(dataALL);
                                setData([...data, newData]);
                                resolve();
                            });
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        async function postData(url = '', dataALL = { newData }) {
                            const response = await fetch(url, {
                                method: 'PUT',
                                mode: 'cors',
                                cache: 'no-cache',
                                credentials: 'same-origin',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                redirect: 'follow',
                                referrerPolicy: 'no-referrer',
                                body: JSON.stringify(newData)
                            });
                            return response.json();
                        }
                        postData('http://localhost:3002/api/users/' + newData._id)
                            .then(dataALL => {
                                console.log(dataALL);
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setData([...dataUpdate]);
                                resolve();
                            });
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        const isDelete = deleteData(oldData._id);
                        if (isDelete) {
                            const dataDelete = [...data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);

                            resolve();
                        }
                    }),
            }}
        />
    )
}

export default DataTableComponent;