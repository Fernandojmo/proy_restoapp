import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


const Inicio = () => {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <div>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 vh-25"
            src={require('./../../images/bar.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mh-25"
            src={require('./../../images/vitrina.jpg')}
            alt="Second slide"
            
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mh-25"
            src={require('./../../images/degustacion1.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div className='d-flex flex-row justify-content-center align-items-center'>
        <div className=" w-25 m-4 ">
          <Image
          className="w-100"
          src={require('./../../images/salud.jpg')}
          alt="First slide"
          />
        </div>
        <div className='text-center w-50 m-4'>
          <h2>
            Nuestro objetivo
          </h2>
          <p >
            Misión: Nuestra misión es ofrecer a nuestros clientes una experiencia única a través de la elaboración de cervezas de alta calidad, utilizando ingredientes naturales y procesos artesanales que respetan la tradición cervecera. Queremos ser reconocidos como una marca que promueve el consumo responsable de alcohol y que contribuye al desarrollo sostenible de las comunidades en las que operamos.
            Visión: Queremos convertirnos en la marca líder en la industria cervecera, reconocida por su excelencia en la elaboración de cervezas y su compromiso con la calidad, la innovación y el cuidado del medio ambiente. Nos esforzamos por ofrecer una amplia variedad de cervezas que satisfagan los gustos y preferencias de nuestros clientes, mientras mantenemos nuestro compromiso con la sostenibilidad y la responsabilidad social.
          </p>
        </div>
      </div>
      <div className='d-flex flex-row justify-content-center align-items-center'>
      <div className='text-center w-50 m-4'>
          <h2>
            Nuestra Historia
          </h2>
          <p >
          La bodega cervecera fue fundada en 1990 por un grupo de amigos que compartían la pasión por la cerveza artesanal. Al principio, elaboraban cervezas en pequeñas cantidades en el garaje de uno de ellos y las vendían en eventos locales. Con el tiempo, la popularidad de su cerveza aumentó y decidieron invertir en una fábrica. Hoy en día, La bodega cervecera es una empresa líder en la industria cervecera con una amplia variedad de cervezas que se venden en todo el mundo. A pesar de su éxito, la empresa mantiene su compromiso con la elaboración de cervezas de alta calidad y sigue siendo propiedad de sus fundadores originales.
          </p>
        </div>
        <div className=" w-25 m-4 ">
          <Image
          className="w-100"
          src={require('./../../images/terraza.jpg')}
          alt="First slide"
          />
        </div>
      </div>
      <div>

      </div>

    </div>

  )
}

export default Inicio