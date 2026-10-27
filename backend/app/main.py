from fastapi import FastAPI
from app.routers import map, weather
 
app = FastAPI(title="Scalable Pi Backend")
 
# Register APIRouters dynamically under unified namespace
app.include_router(map.router)
# app.include_router(weather.router)
 
@app.get("/")
def root():
    return {"status": "healthy"}
