from http import HTTPStatus
from typing import List, Dict
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas import BuildingSchema
from config import get_db
from structures.service import BuildingService
from structures.security import authenticate


class ViewsRouter:
    def __init__(self):
        self.router = APIRouter(prefix="/structures/api/v1/buildings", dependencies=[Depends(authenticate)])

        self.router.add_api_route("/", self.get_buildings_list, methods=["GET"], status_code=HTTPStatus.OK,
                                  response_model=Dict[str, List[BuildingSchema]])

        self.router.add_api_route("/{id}", self.get_building, methods=["GET"], status_code=HTTPStatus.OK,
                                  response_model=Dict[str, BuildingSchema])

        self.router.add_api_route("/", self.create_new_building, methods=["POST"], status_code=HTTPStatus.CREATED,
                                  response_model=Dict[str, BuildingSchema])

        self.router.add_api_route("/{id}", self.update_one_building, methods=["PUT"], status_code=HTTPStatus.OK,
                                  response_model=Dict[str, BuildingSchema])

        self.router.add_api_route("/{id}", self.delete_building, methods=["DELETE"], status_code=HTTPStatus.OK,
                                  response_model=Dict[str, bool])

    @staticmethod
    def get_buildings_list(db: Session = Depends(get_db)):
        building_service = BuildingService(db)
        return {"buildings": building_service.get_all_buildings()}

    @staticmethod
    def get_building(id: int, db: Session = Depends(get_db)):
        building_service = BuildingService(db)
        building = building_service.get_building_by_id(id)
        if building is None:
            raise HTTPException(status_code=404, detail="Building not found")
        return {"building": building}

    @staticmethod
    def create_new_building(new_building: BuildingSchema, db: Session = Depends(get_db)):
        building_service = BuildingService(db)
        if new_building.title is None or new_building.type_building_id is None or new_building.city_id is None:
            raise HTTPException(status_code=400, detail="Building create error!")

        if new_building.height is None:
            new_building.height = 0
        if new_building.year is None:
            new_building.height = 2000

        return {"created_building": building_service.create_building(new_building)}

    @staticmethod
    def update_one_building(id: int, building_info: BuildingSchema, db: Session = Depends(get_db)):
        building_service = BuildingService(db)
        return {"updated_building": building_service.update_building(id, building_info)}

    @staticmethod
    def delete_building(id: int, db: Session = Depends(get_db)):
        building_service = BuildingService(db)
        building_service.delete_one_building(id)
        return {"result": True}