from fastapi import FastAPI
import uvicorn
import models
from config import engine
from structures.views import ViewsRouter

# Создаем все таблицы в базе данных
models.Base.metadata.create_all(bind=engine)

app = FastAPI()


app.include_router(ViewsRouter().router)


if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=8000, reload=True)
