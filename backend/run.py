import uvicorn
 
if __name__ == '__main__':
    # Binds server directly to internal port 5000 matching Caddyfile reverse proxy
    uvicorn.run("app.main:app", host="127.0.0.1", port=5000, reload=True)
