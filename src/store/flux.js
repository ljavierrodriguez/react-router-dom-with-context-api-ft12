const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiURL: 'https://4000-amethyst-chicken-uk3riojs.ws-us15.gitpod.io',
            name: '',
            lastname: '',
            age: 39,
        },
        actions: {
            getUsers: () => {
                const { apiURL } = getStore();
                fetch(`${apiURL}/users`)
                    .then((response) => response.json())
                    .then(data => setStore({ users: data }));
            },
            a: () => {
                setStore({
                    name: 'Luis',
                    lastname: 'Rodriguez'
                })
                //alert("Hola desde A");
            },
            b: () => {
                //getActions().a();
                const { a } = getActions();
                a();

                const { name, lastname } = getStore();
                //alert(`Hola ${name} ${lastname}`);
            },
            c: () => {
                //alert("Buscando Informacion");
            }
        }
    }
}

export default getState;