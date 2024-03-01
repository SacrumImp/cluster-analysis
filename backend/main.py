from fastapi import FastAPI, BackgroundTasks, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from models import ExperimentParams
from data_producer import synthetic_generator
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins during development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/performExperiment")
async def calculate(request: ExperimentParams):
  if request.dataType == 0:
    X, labels = synthetic_generator.generate_synthetic_data(N, V, K_star, n, alpha)
    return { "X": X, "labels": labels }

  return {"result": "error"}


def process_task(task: str):
  with open("task_results.txt", "a") as f:
      f.write(f"Processed task: {task}\n")

class Task(BaseModel):
    task: str

@app.post("/submit-task/")
async def submit_task(task: Task, background_tasks: BackgroundTasks):
  background_tasks.add_task(process_task, task)
  return {"message": "Task received, processing in background"}

active_connections = []

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    active_connections.append(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            await websocket.send_text(f"Message text was: {data}")
    except:
        active_connections.remove(websocket)

if __name__ == "__main__":
  import uvicorn
  uvicorn.run(app, host="0.0.0.0", port=8000)
