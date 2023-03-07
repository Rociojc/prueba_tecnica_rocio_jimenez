## Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta root de la aplicacion correr: npm install
2. Navega al directorio front y vuelve a correr el comando: npm install

	En caso que no funcione la intalacion con el comando global, aqui estan los comandos de instalacion por libreria:

	axios: npm install axios
	react router dom v6: npm install react-router-dom@6
	style component: npm install --save styled-components

3. Regresa al directorio root cd ...

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

npm run dev


## Contenido del SRC

se crearon 5 carpetas en el src:

assets: guarda todas las imagenes e iconos
components: guarda los componentes creados
pages: guarda las paginas que tendra el proyecto
services: guarda la logica que consume el api
style: guarda todos los archivos de estilos

## Carpeta Components

1. cards

Card.js: componente que muestra una tarjeta con un producto
CardDisplay: componente que muestra una tarjeta con los detalles del producto

2. carts

CartProduct.js: componente que muestra el producto que se agrega al carrito
CartTotal.js: componente que muestra la suma del precio de los productos en el carrito

3. context

UseContext.jsx: este archivo maneja el estado global, que se extenderan a cualquier parte del proyecto donde sea necesario

4. layout

Header.jsx: componente header que muestra el mini carrito y la cantidad añadida

## Carpeta Pages

1. Cart.jsx: aqui se encuentran los componentes CartProduct y CartTotal, el componente CartProduct esta siendo recorrido por un map para renderizar los produtos que sean agregados al carrito.
 
2. ProductoDisplay.jsx: aqui se encuentra el componente CardDisplay, donde se encuentra la logica para renderizar la informacion del producto segun su id

3. ProductList.jsx: aqui se encutentra el componente Card, este es recorrido por una map y renderiza todos los productos del array con sus propiedades

## Carpeta Services

1. Api.js: aqui se encuentra el llamado de la api con la libreria axios, dejando al api en una variable, esta puede ser usada en otro archivo, en caso que cambio la url base, unicamente se ralizaria el cambio es este archivo.

2. Product.jsx: aqui se encuentran las peticiones al api

## Carpeta Styles

Aqui se encuetran cada uno de los componentes que requieren estilos, organizados de la misma forma que los componentes y las paginas, para realizar estilos se uso la libreria de style component teniendo encuenta la filosofia "Mobile-First Responsive Design".

La libreria react router dom se uso para la navegacion entre paginas

¡Muchas gracias!