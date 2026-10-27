from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import map, weather

app = FastAPI(title="Scalable Pi Backend")

# Define allowed origins (replace with your production GitHub Pages URL later)
origins = [
    "http://localhost:5500",        # Local Live Server development
    "http://127.0.0.1:5500",
    "https://github.io" # Your production frontend GitHub repo site
]

# Apply CORSMiddleware to your application instance
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all HTTP headers
)

# Register APIRouters dynamically under unified namespace
app.include_router(map.router)
app.include_router(weather.router)

@app.get("/")
def root():
    return {"status": "healthy"}
