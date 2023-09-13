import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header, MyCard, Tags, Footer} from './components';
const perros = [
  {
    name: "Affenpinscher",
    url: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2021-01/Affenpinscher2.webp?itok=KaQgJi3_",
    descripcion: "Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!",
    tagcolor: "success",
    pname: "Messi",
},
{
    name: "Afgano",
    url: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2020-12/Afghan%20Hound1.webp?itok=kZfAGjbq",
    descripcion: "Lleno de energía y listo para jugar. ¡Dale a bartolo el hogar amoroso que se merece!",
    tagcolor: "primary",
    pname: "Bartolo",
},
{
    name: "Akita japonés",
    url: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2020-12/Japanese%20Akita2.webp?itok=JYvC7QQt",
    descripcion: "Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!",
    tagcolor: "danger",
    pname: "Gohan",
},
{
    name: "Basenji",
    url: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2020-12/Basenji1.webp?itok=q4aGV549",
    descripcion: "Es una compañera leal y cariñosa que adora los mimos y abrazos. ¡Ayuda a Princesa a encontrar su final feliz!",
    tagcolor: "warning",
    pname: "Princesa",
},
];
const tag = [];
function App() {
  return (
    <>
      <Header/>
      <div className='mainflex'>
      {
        perros.map(perros => (
          <MyCard 
          key={perros.name}
          name={perros.name} 
          url={perros.url} 
          descripcion={perros.descripcion}
          tagcolor= {perros.tagcolor}
          pname= {perros.pname} />
        ))
      }
      </div>
      <Footer/>
    </>
  );
}

export default App;
