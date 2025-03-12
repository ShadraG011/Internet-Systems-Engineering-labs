from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from config import Base

class Country(Base):
    __tablename__ = 'country'  # задавать необязательно
    id = Column(Integer, primary_key=True)
    name = Column('Страна', String(100), nullable=False)
    cities = relationship('City', cascade='all, delete')
    def __init__(self, name):
        self.name = name


class TypeBuilding(Base):
    __tablename__ = 'type_building'  # задавать необязательно
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column('Тип', String(100), nullable=False)
    buildings = relationship("Building", back_populates="type_building", cascade="all, delete")

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f'\nid: {self.id}, Тип: {self.name}'


class City(Base):
    __tablename__ = 'city'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column('Город', String(100), nullable=False)
    country_id = Column(Integer, ForeignKey('country.id'), nullable=False)
    country = relationship("Country", back_populates="cities")
    buildings = relationship("Building", back_populates="city", cascade="all, delete")

    def __init__(self, name, country_id):
        self.name = name
        self.country_id = country_id


class Building(Base):
    __tablename__ = 'building'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column('Название', String(200))
    type_building_id = Column(Integer, ForeignKey('type_building.id'))
    city_id = Column(Integer, ForeignKey('city.id'))
    year = Column(Integer)
    height = Column(Integer)
    type_building = relationship("TypeBuilding", back_populates="buildings", cascade="all, delete")
    city = relationship("City", back_populates="buildings", cascade="all, delete")

    def __init__(self, title, type_building_id, city_id, year, height):
        self.title = title
        self.type_building_id = type_building_id
        self.city_id = city_id
        self.year = year
        self.height = height
