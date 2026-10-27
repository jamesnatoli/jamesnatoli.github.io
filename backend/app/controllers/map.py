from fastapi import APIRouter
 
router = APIRouter(prefix="/api", tags=["map"])
 
@router.get("/map-data")
def get_map_data():
    # Write dynamic query logic, database operations or sensor calls here safely.
    return [
        {
            "name": "Pi Server Location",
            "lat": 38.98,
            "lng": -94.67,
            "description": "FastAPI running on the Pi!"
        }
    ]

