from typing import Optional
from pydantic import BaseModel, ConfigDict


class TypeBuildingSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str


class CountrySchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id:int
    name: str

class CitySchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id:int
    name: str
    country: Optional[CountrySchema]


class BuildingSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: Optional[int] = None
    title: Optional[str]
    city_id: Optional[int] = None
    city: Optional[CitySchema] = None
    type_building_id: Optional[int] = None
    type_building: Optional[TypeBuildingSchema] = None
    height: Optional[int] = None
    year: Optional[int] = None

