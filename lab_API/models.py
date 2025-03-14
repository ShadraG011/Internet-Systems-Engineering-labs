from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from config import Base

class CountryORM(Base):
    __tablename__ = 'country'  # задавать необязательно
    id = Column(Integer, primary_key=True)
    name = Column('Страна', String(100), nullable=False)
    cities = relationship('CityORM', cascade='all, delete')
    def __init__(self, name):
        self.name = name


class TypeBuildingORM(Base):
    __tablename__ = 'type_building'  # задавать необязательно
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column('Тип', String(100), nullable=False)
    buildings = relationship("BuildingORM", back_populates="type_building", cascade="all")

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f'\nid: {self.id}, Тип: {self.name}'


class CityORM(Base):
    __tablename__ = 'city'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column('Город', String(100), nullable=False)
    country_id = Column(Integer, ForeignKey('country.id'), nullable=False)
    country = relationship("CountryORM", back_populates="cities")
    buildings = relationship("BuildingORM", back_populates="city", cascade="all, delete")

    def __init__(self, name, country_id):
        self.name = name
        self.country_id = country_id


class BuildingORM(Base):
    __tablename__ = 'building'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column('Название', String(200))
    type_building_id = Column(Integer, ForeignKey('type_building.id'))
    city_id = Column(Integer, ForeignKey('city.id'))
    year = Column(Integer)
    height = Column(Integer)
    type_building = relationship("TypeBuildingORM", back_populates="buildings")
    city = relationship("CityORM", back_populates="buildings")

    def __init__(self, title, type_building_id, city_id, year, height):
        self.title = title
        self.type_building_id = type_building_id
        self.city_id = city_id
        self.year = year
        self.height = height
