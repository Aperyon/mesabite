# MesaBite

## Pre-requisites

- Have python Poetry set up
- Have Nodejs set up

## Start the project

### Backend

```bash
cd backend
echo DJANGO_SECRET_KEY="some-secret" > .env
poetry install
cd src
poetry shell
./manage.py migrate
./manage.py loaddata ./testdata.json
./manage.py createsuperuser
./manage.py runserver
```

### Frontend

```bash
npm i
npm run dev
```

## See the project running

### Backend

- Admin panel: http://localhost:8000/admin/ (use the credentials provided during the backend setup)
- Browsable API: http://localhost:8000/api/
- API Docs: http://localhost:8000/api/docs/

### Frontend

- App: http://localhost:5173 (open developer console (CMD/CTRL + ALT + I), then turn on the device toolbar (CMD/CTRL + Shift + M), then select the desired mobile Dimensions on the top center of the browser. This is for Chrome only.)
