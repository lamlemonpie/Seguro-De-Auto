# Seguro De Autos
Hacking Challenge de Seguro de Autos realizado en React con SASS.

## Scripts Disponibles

En el directorio del proyecto ejecutar:

### `npm start`

## Caracteristicas desarrolladas
- El proyecto es capaz de validad los campos de inicio
- El proyecto es capaz de obtener un usuario aleatorio desde el endpoint sugerido
- El proyecto es capaz de mostrar diferentes componentes en base al tamaño de pantalla
- El proyecto es capaz de calcular el total de coberturas seleccionadas
- El proyecto es capaz de eliminar coberturas de acuerdo a la condición pedida
- El proyecto es capaz de mantener datos desde el flujo inicial hasta el final
- El proyecto posee una estructura de archivos orientada a las caracteristicas (feature based)
- El proyecto no es capaz de leer datos del local storage.

## Consideraciones
- Se tomaron libertades al momento de usar tamaños intermedios de pantalla (algunos componentes se expanden a decisión del desarrollador ya que no poseen diseño explicito)
- Ciertos elementos no poseen funcionalidad ya que no se describen estos en el diseño (tabs, botones de la ventana de gracias, telefono, etc)
- Se encontraron algunas inconsistencias en la colocación del footer, se procedió a colocarlo igual que en el diseño.
- Algunos iconos fueron usados directamente del diseño (switches, flechas y checkbox)

## Retos
- Ciertos componentes necesitaban aparecer en cierto tamaño de pantalla (tenia versiones diferentes en distintas ubicaciones del codigo: switch, ver mas, etc.), se creó el hook `useViewport` para poder comparar correctamente desde React a la par de media queries para los estilos.

## Capturas de Pantalla
# Mobile
![image](https://user-images.githubusercontent.com/16145739/202700484-003e29a8-3455-4ce3-abd9-115da649c205.png)
![image](https://user-images.githubusercontent.com/16145739/202700586-0da966d4-0469-4089-8e63-89dfa17b5db3.png)
![image](https://user-images.githubusercontent.com/16145739/202700616-5c907178-eafc-46f7-8537-973da27664f1.png)
![image](https://user-images.githubusercontent.com/16145739/202700890-a7286d03-0b66-43e7-a6b7-c1a4301691cb.png)

# Desktop
![image](https://user-images.githubusercontent.com/16145739/202701010-e3d53915-43c5-4def-b4dd-55179cf24671.png)
![image](https://user-images.githubusercontent.com/16145739/202700832-d7f2110b-775e-472e-b86f-0f17865d8159.png)
![image](https://user-images.githubusercontent.com/16145739/202700959-51bfc0ea-19c1-4d02-8917-bd2a28176d1e.png)


