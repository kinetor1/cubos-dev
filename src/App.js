import local from './local.jpeg';
import './App.css';
import Card from './components/Card';
import MuiCard from './components/MuiCard';

const cubos = [
  {
    id: 1,
    title: 'Novedades Mary',
    giro: 'Papeleria y novedades',
    ciudad: 'Ciudad Victoria',
    colonia: 'Campestre',
    calle: '13',
    desc: 'Tenemos todas las novedades mas novedosas',
    image:'https://img.freepik.com/free-psd/top-view-blue-school-bag-with-supplies_23-2148278197.jpg'
  },
  {
    id: 2,
    title: 'Modas Tu',
    giro: 'Ropa',
    ciudad: 'Ciudad Victoria',
    colonia: 'Mexico',
    calle: 'Tulum',
    desc:'La mejor ropa al mejor precio',
    image:'https://img.freepik.com/free-vector/banner-with-handrawn-elements-sale_125540-187.jpg'
  },
  {
    id: 3,
    title: 'Jugetes Etes',
    giro: 'Jugueteria',
    ciudad: 'Ciudad Victoria',
    colonia: 'Benito Juarez',
    calle: 'Juarez',
    desc:'Juguetes para todas las edades incluyendo didacticos y electronicos',
    image:'https://img.freepik.com/free-vector/three-boxes-full-toys_1308-37294.jpg'
  },
  {
    id: 4,
    title: 'Tacos Alameda',
    giro: 'Tacos',
    ciudad: 'Ciudad Victoria',
    colonia: 'Uno',
    calle: 'Las Torres',
    desc: 'Tacos de bistec, papas asadas, tacos de trompo, volcanes, hamburguesas y mas',
    image:'https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14221.jpg'
  },
  {
    id: 5,
    title: 'Papeleria Colores',
    giro: 'Papeleria',
    ciudad: 'Ciudad Victoria',
    colonia: 'El Villareal',
    calle: 'Rio Panuco',
    desc: 'Papeleria, articulos para fiestas, copias y mas',
    image:'https://img.freepik.com/free-vector/school-student-stationary-supplies-shelf_3446-469.jpg'
  },
  {
    id: 6,
    title: 'El Cazador',
    giro: 'Deportes',
    ciudad: 'Ciudad Victoria',
    colonia: 'Colonial',
    calle: 'La Colonia',
    desc: 'Todo tipo de equipo para caza y pesca',
    image:'https://img.freepik.com/free-vector/into-wild-background_1284-15847.jpg'
  }

]



const mapCubos = (elementos) => {
  return (
    (
      <MuiCard key={elementos.id} title={elementos.title}  giro={elementos.giro} desc={elementos.desc} img={elementos.image}/>
    )
  )
}

const mapaElementos = cubos.map(mapCubos);



function App() {
  return (
    <div>
      <h1 className='header'>Todos los sitios en uno1</h1>
    <div className="App">
      
        {mapaElementos}
      
    </div>
    </div>
  );
}

export default App;
