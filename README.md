# Softoil_Gustavo_Rea
Web Project using Vue and NestJs

# Autor y medio de contacto  
Gustavo Rea  
GRea615@gmail.com  
4181144618  

## URL de despliegue
En estos momentos tendré desplegado el sistema frontend en la url:   `https://j29d1ghs-3000.usw3.devtunnels.ms/`   y el backend en:   `https://j29d1ghs-3001.usw3.devtunnels.ms/`  en caso de que el tunel este cerrado, favor de contactarme por whatsapp o llamada al número `4181144618`, por ahora lo mantendre abierto en horario de 10:00 A.M. a 6:00 P.M. de Lunes a Viernes hasta que se me indique que ya fue revisada la prueba tecnica.

## Dificultades
Tuve problemas integrando Quasar aunque segui la documentacion oficial al crear componentes de la libreria no conseguia que me los reconociera el proyecto, opte por hacer componentes con Tailwind completamente.  
Vue es un framework interesante de dominar

## Estructura del Proyecto

### Backend (Nest)

backend-nest-softoil                   
├─ dist                                
│  ├─ auth                             
│  │  ├─ auth.controller.d.ts          
│  │  ├─ auth.controller.js            
│  │  ├─ auth.controller.js.map        
│  │  ├─ auth.module.d.ts              
│  │  ├─ auth.module.js                
│  │  ├─ auth.module.js.map            
│  │  ├─ auth.service.d.ts             
│  │  ├─ auth.service.js               
│  │  ├─ auth.service.js.map           
│  │  ├─ jwt-auth.guard.d.ts           
│  │  ├─ jwt-auth.guard.js             
│  │  ├─ jwt-auth.guard.js.map         
│  │  ├─ jwt.strategy.d.ts             
│  │  ├─ jwt.strategy.js               
│  │  └─ jwt.strategy.js.map           
│  ├─ log                              
│  │  ├─ log.controller.d.ts           
│  │  ├─ log.controller.js             
│  │  ├─ log.controller.js.map         
│  │  ├─ log.module.d.ts               
│  │  ├─ log.module.js                 
│  │  ├─ log.module.js.map             
│  │  ├─ log.service.d.ts              
│  │  ├─ log.service.js                
│  │  └─ log.service.js.map            
│  ├─ users                            
│  │  ├─ dto                           
│  │  │  ├─ create-user.dto.d.ts       
│  │  │  ├─ create-user.dto.js         
│  │  │  └─ create-user.dto.js.map     
│  │  ├─ users.controller.d.ts         
│  │  ├─ users.controller.js           
│  │  ├─ users.controller.js.map       
│  │  ├─ users.module.d.ts             
│  │  ├─ users.module.js               
│  │  ├─ users.module.js.map           
│  │  ├─ users.service.d.ts            
│  │  ├─ users.service.js              
│  │  └─ users.service.js.map          
│  ├─ app.controller.d.ts              
│  ├─ app.controller.js                
│  ├─ app.controller.js.map            
│  ├─ app.module.d.ts                  
│  ├─ app.module.js                    
│  ├─ app.module.js.map                
│  ├─ app.service.d.ts                 
│  ├─ app.service.js                   
│  ├─ app.service.js.map               
│  ├─ main.d.ts                        
│  ├─ main.js                          
│  ├─ main.js.map                      
│  ├─ prisma.module.d.ts               
│  ├─ prisma.module.js                 
│  ├─ prisma.module.js.map             
│  ├─ prisma.service.d.ts              
│  ├─ prisma.service.js                
│  ├─ prisma.service.js.map            
│  └─ tsconfig.build.tsbuildinfo       
├─ prisma                              
│  ├─ migrations                       
│  │  ├─ 20240703215631_init           
│  │  │  └─ migration.sql              
│  │  ├─ 20240704043403_add_log_model  
│  │  │  └─ migration.sql              
│  │  └─ migration_lock.toml           
│  └─ schema.prisma                    
├─ src                                 
│  ├─ auth                             
│  │  ├─ auth.controller.spec.ts       
│  │  ├─ auth.controller.ts            
│  │  ├─ auth.module.ts                
│  │  ├─ auth.service.spec.ts          
│  │  ├─ auth.service.ts               
│  │  ├─ jwt-auth.guard.ts             
│  │  └─ jwt.strategy.ts               
│  ├─ log                              
│  │  ├─ log.controller.spec.ts        
│  │  ├─ log.controller.ts             
│  │  ├─ log.module.ts                 
│  │  ├─ log.service.spec.ts           
│  │  └─ log.service.ts                
│  ├─ users                            
│  │  ├─ dto                           
│  │  │  └─ create-user.dto.ts         
│  │  ├─ users.controller.spec.ts      
│  │  ├─ users.controller.ts           
│  │  ├─ users.module.ts               
│  │  ├─ users.service.spec.ts         
│  │  └─ users.service.ts              
│  ├─ app.controller.spec.ts           
│  ├─ app.controller.ts                
│  ├─ app.module.ts                    
│  ├─ app.service.ts                   
│  ├─ main.ts                          
│  ├─ prisma.module.ts                 
│  └─ prisma.service.ts                
├─ test                                
│  ├─ app.e2e-spec.ts                  
│  └─ jest-e2e.json                    
├─ nest-cli.json                       
├─ package-lock.json                   
├─ package.json                        
├─ README.md                           
├─ tsconfig.build.json                 
└─ tsconfig.json                       

### Frontend (Vue Nuxt 3 Quasar Tailwind)

frontend-vue-quasar-softoil  
├─ assets                    
│  ├─ css                    
│  │  └─ tailwind.css        
│  └─ img                    
├─ components                
│  ├─ EditUser.vue           
│  └─ Navbar.vue             
├─ layouts                   
├─ middleware                
│  └─ auth.js                
├─ pages                     
│  ├─ default.vue            
│  ├─ index.vue              
│  ├─ login.vue              
│  ├─ register.vue           
│  └─ users.vue              
├─ plugins                   
│  └─ quasar.js              
├─ public                    
│  └─ favicon.ico            
├─ server                    
│  └─ tsconfig.json          
├─ stores                    
│  ├─ auth.js                
│  └─ user.js                
├─ app.vue                   
├─ nuxt.config.ts            
├─ package-lock.json         
├─ package.json              
├─ README.md                 
├─ tailwind.config.js        
└─ tsconfig.json             


## Instalación y Ejecución

### Backend

1. Clona el repositorio del backend.
2. Instala las dependencias con `npm install`.
3. Configura las variables de entorno para la conexión a la base de datos (la base de datos se debe llamar `softoil_rea` o el nombre que gusten).
4. Inicia el servidor con `npm run start:dev`.

## Credenciales para la conexion a la base de datos
`DATABASE_URL="postgresql://postgres:ROOT@localhost:5432/softoil_rea?schema=public"`

### Frontend

1. Clona el repositorio del frontend.
2. Instala las dependencias con `npm install`.
3. Inicia la aplicación con `ng serve` o `npm start`.

## Contribución

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-característica`).
3. Realiza tus cambios y haz commit (`git commit -am 'ABC(Tus iniciales) Añadir nueva característica'`).
4. Sube tus cambios (`git push origin feature/nueva-característica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo LICENSE para más detalles.

## Documentacion oficial para configurar el proyecto
### Middleware
Tuve un problema con el middleware ya que en la documentacion oficial en su subdominio de auth mencionan que se debe incluir en `nuxt.config.js`:  
`https://auth.nuxtjs.org/guide/middleware`  

Es confusa la documentación pero consegui arreglarlo

### Configurar Tailwind en Nuxt
`https://tailwindcss.com/docs/guides/nuxtjs`

### Configurar Quasar en Nuxt 
`https://nuxt.com/modules/quasar`

### Configurar Pinia en Nuxt
`https://pinia.vuejs.org/ssr/nuxt.html`

## Dependencias Y Versiones Usadas

### Backend

"dependencies": {  
    "@nestjs/common": "^10.3.2",  
    "@nestjs/core": "^10.3.2",  
    "@nestjs/jwt": "^10.2.0",  
    "@nestjs/passport": "^10.0.3",  
    "@nestjs/platform-express": "^10.3.10",  
    "@prisma/client": "^5.16.1",  
    "bcrypt": "^5.1.1",  
    "bcryptjs": "^2.4.3",  
    "class-transformer": "^0.5.1",  
    "class-validator": "^0.14.1",  
    "passport": "^0.7.0",  
    "passport-jwt": "^4.0.1",  
    "passport-local": "^1.0.0",  
    "reflect-metadata": "^0.2.1",  
    "rxjs": "^7.8.1"  
  },  
  "devDependencies": {  
    "@nestjs/cli": "^10.3.1",  
    "@nestjs/schematics": "^10.1.0",  
    "@nestjs/testing": "^10.3.2",  
    "@swc/cli": "^0.3.9",  
    "@swc/core": "^1.4.0",  
    "@types/express": "^4.17.21",  
    "@types/jest": "^29.5.12",  
    "@types/node": "^20.11.16",  
    "@types/supertest": "^6.0.2",  
    "@typescript-eslint/eslint-plugin": "^6.21.0",  
    "@typescript-eslint/parser": "^6.21.0",  
    "eslint": "^8.56.0",  
    "eslint-config-prettier": "^9.1.0",  
    "eslint-plugin-prettier": "^5.1.3",  
    "jest": "^29.7.0",  
    "prettier": "^3.2.5",  
    "prisma": "^5.16.1",  
    "source-map-support": "^0.5.21",  
    "supertest": "^6.3.4",  
    "ts-jest": "^29.1.2",  
    "ts-loader": "^9.5.1",  
    "ts-node": "^10.9.2",  
    "tsconfig-paths": "^4.2.0",  
    "typescript": "^5.3.3"  
  },  

### Frontend
"dependencies": {  
    "@nuxtjs/auth-next": "5.0.0-1667386184.dfbbb54",  
    "@nuxtjs/axios": "^5.13.6",  
    "@pinia/nuxt": "^0.5.1",  
    "@quasar/extras": "^1.16.11",  
    "axios": "^1.7.2",  
    "nuxt": "^3.12.3",  
    "quasar": "^2.16.5",  
    "vue": "latest"  
  },  
  "devDependencies": {  
    "@quasar/vite-plugin": "^1.7.0",  
    "autoprefixer": "^10.4.19",  
    "postcss": "^8.4.39",  
    "tailwindcss": "^3.4.4"  
  }  