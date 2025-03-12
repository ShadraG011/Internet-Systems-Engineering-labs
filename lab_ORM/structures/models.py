from config import SessionLocal
from models import Country, City, Building, TypeBuilding
from sqlalchemy.orm import Session
from sqlalchemy import func

def get_all_buildings(db: Session):
    query = (
        db.query(
            Building.title.label("Здание"),
            TypeBuilding.name.label("Тип"),
            Country.name.label("Страна"),
            City.name.label("Город"),
            Building.year.label("Год"),
            Building.height.label("Высота")
          )
        .select_from(Building)
        .join(TypeBuilding)
        .join(City)
        .join(Country)
    )
    return [query.statement.columns.keys(), query.all()]

def get_buildings_types_info(db: Session):
    query = (
        db.query(
            TypeBuilding.name.label("Тип"),
            func.max(Building.height).label("Максимальная высота"),
            func.min(Building.height).label("Минимальная высота"),
            func.round(func.avg(Building.height), 1).label("Средняя высота")
        )
        .join(Building)
        .group_by(TypeBuilding.name)
    )

    return [query.statement.columns.keys(), query.all()]

def get_info_by_country(db: Session):
    query = (
        db.query(
            Country.name.label("Страна"),
            func.max(Building.height).label("Максимальная высота"),
            func.min(Building.height).label("Минимальная высота"),
            func.round(func.avg(Building.height), 1).label("Средняя высота")
        )
        .select_from(Building)
        .join(City)
        .join(Country)
        .group_by(Country.name)
    )

    return [query.statement.columns.keys(), query.all()]

def get_info_by_years(db: Session):
    query = (
        db.query(
            Building.year.label("Год"),
            func.max(Building.height).label("Максимальная высота"),
            func.min(Building.height).label("Минимальная высота"),
            func.round(func.avg(Building.height), 1).label("Средняя высота")
        )
        .group_by(Building.year)
    )

    return [query.statement.columns.keys(), query.all()]

def get_info_by_years_period(db: Session, from_year: int, to_year: int):
    query = (
        db.query(
            Building.title.label("Здание"),
            TypeBuilding.name.label("Тип"),
            Country.name.label("Страна"),
            City.name.label("Город"),
            Building.year.label("Год"),
            Building.height.label("Высота")
        )
        .select_from(Building)
        .join(City)
        .join(Country)
        .join(TypeBuilding)
        .filter((Building.year >= from_year) & (Building.year < to_year))
        .order_by(Building.year)
    )

    return [query.statement.columns.keys(), query.all()]