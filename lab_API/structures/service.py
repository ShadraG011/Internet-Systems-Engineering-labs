from fastapi import HTTPException
from models import BuildingORM
from schemas import BuildingSchema
from sqlalchemy.orm import Session


class BuildingService:

    def __init__(self, db: Session):
        self.db = db

    def get_all_buildings(self):
        return self.db.query(BuildingORM).all()

    def get_building_by_id(self, building_id: int):
        return self.db.query(BuildingORM).filter_by(id=building_id).first()

    def create_building(self, building: BuildingSchema):
        new_building = BuildingORM(
            title=building.title,
            type_building_id=building.type_building_id,
            city_id=building.city_id,
            year=building.year,
            height=building.height
        )
        self.db.add(new_building)
        self.db.commit()
        self.db.refresh(new_building)
        return new_building

    def update_building(self, building_id: int, building_info: BuildingSchema):
        building = self.get_building_by_id(building_id)

        if building is None:
            raise HTTPException(status_code=400, detail="Building update error!")

        for key, value in building_info.__dict__.items():
            if value is not None:
                setattr(building, key, value)

        self.db.commit()
        self.db.refresh(building)
        return building

    def delete_one_building(self, building_id: int):
        building = self.get_building_by_id(building_id)
        if building is None:
            raise HTTPException(status_code=404, detail="Building not found!")
        self.db.delete(building)
        self.db.commit()
