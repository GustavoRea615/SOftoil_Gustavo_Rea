# Softoil_Gustavo_Rea
Web Project using Vue and NestJs

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
