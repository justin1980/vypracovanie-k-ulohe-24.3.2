class Village extends React.Component {
    render() {
        return(
            <div>{
                VillageItem.map((value) => {
                    return <a className={"fa-solid " + value.type} style={{fontSize: value.size, color: value.color}}></a>
                })    
            }
            </div>
        )
    }
}
const VillageItem = [
    { name:'Poruba-building', type: 'fa-building', color: 'gray', size: '50px' },
    { name:'Poruba-car', type: 'fa-car-side', color: 'red', size: '20px' },
    { name:'Poruba-home', type: 'fa-home', color: '#000000', size: '30px' },
    { name:'Lazany-building', type: 'fa-building', color: 'yellow', size: '80px' },
    { name:'Lazany-tree', type: 'fa-tree', color: 'green', size: '40px' },
    { name:'Lazany-tree', type: 'fa-tree', color: 'green', size: '60px' },
    { name:'Lazany-tree', type: 'fa-tree', color: 'green', size: '15px' },
    { name:'Lazany-home', type: 'fa-home', color: 'brown', size: '25px' },
    { name:'Lazany-home', type: 'fa-home', color: '#88cfe5', size: '35px' },
];


const root = ReactDOM.createRoot(document.getElementById("dedinka"))
root.render(<Village name={VillageItem.name} key={VillageItem}/>) 
