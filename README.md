# Admin Shop Web

Proyecto Next.js (app router) para el panel de administración de la tienda.

Requisitos

- Node.js 18+ (recomendado)
- npm / pnpm / yarn

Instalación local

```bash
# clonar (o usar tu repo local)
npm install
npm run dev
```

Scripts útiles

- `npm run dev` — servidor de desarrollo
- `npm run build` — compilar para producción
- `npm start` — ejecutar build en producción
- `npm run prisma:generate` — generar cliente Prisma

Preparar y subir a GitHub

1. Inicializa el repositorio local (si aún no lo está):

```bash
git init
git add .
git commit -m "chore: initial commit — prepare repo for GitHub and Vercel"
```

2. Crea un repositorio en GitHub y añade el remoto:

```bash
git remote add origin https://github.com/USUARIO/REPO.git
git branch -M main
git push -u origin main
```

Desplegar en Vercel

1. Entra a https://vercel.com y conecta tu cuenta GitHub.
2. Importa el repositorio y selecciona el framework "Next.js" (Vercel detecta automáticamente).
3. Añade las variables de entorno necesarias (ej. DATABASE_URL, NEXTAUTH_URL, etc.) en la sección de Settings > Environment Variables.
4. Despliega; Vercel ejecutará `npm install` y `npm run build` por defecto.

Notas

- Asegúrate de no subir archivos sensibles (.env) y de configurar las variables de entorno en Vercel.
- Si usas Prisma, ejecuta migraciones o `prisma generate` según tu flujo de trabajo.
