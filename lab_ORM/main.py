from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles

from structures.views import views_router

# # Создаем все таблицы в базе данных
# models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Подключаем папку static
app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(views_router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)
