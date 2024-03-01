from fastapi import FastAPI, BackgroundTasks, WebSocket
from models import ExperimentParams

app = FastAPI()

@app.post("/performExperiment")
async def calculate(request: ExperimentParams):
  if request.dataType == 1:
    return {"result": "success"}

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
