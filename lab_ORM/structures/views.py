from fastapi import APIRouter, Depends, Request
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session
from structures.models import get_all_buildings, get_buildings_types_info, \
    get_info_by_country, get_info_by_years_period, get_info_by_years
from config import get_db

views_router = APIRouter()
templates = Jinja2Templates(directory="templates")

@views_router.get("/")
def get_buildings(request: Request, db: Session = Depends(get_db)):

    buildings_head, buildings_body = get_all_buildings(db)
    types_head, types_body = get_buildings_types_info(db)
    country_head, country_body = get_info_by_country(db)
    years_head, years_body = get_info_by_years(db)
    years_period_head, years_period_body = get_info_by_years_period(db, 2000, 2018)



    # Рендеринг шаблона index.html с переменными
    return (
        templates.TemplateResponse(
        "index.html",
        {
            "request": request,

            "buildings_head": buildings_head,
            "buildings_body": buildings_body,

            "types_head": types_head,
            "types_body": types_body,

            "country_head": country_head,
            "country_body": country_body,

            "years_head": years_head,
            "years_body": years_body,

            "years_period_head": years_period_head,
            "years_period_body": years_period_body
         }
        )
    )

