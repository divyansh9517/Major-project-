from fastapi import FastAPI
from pydantic import BaseModel
import joblib
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# ---- CORS FIX ----
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---- Load Models ----
model = joblib.load("./models/multinomial_nb_model.pkl")
vectorizer = joblib.load("./models/vectorizer.pkl")

# ---- Input Format ----
class InputText(BaseModel):
    text: str

@app.post("/predict")
def predict_misinformation(data: InputText):
    text = data.text

    # Vectorize
    X = vectorizer.transform([text])

    # Predict
    pred = model.predict(X)[0]
    proba = model.predict_proba(X)[0]

    confidence = round(max(proba) * 100, 2)

    return {
        "prediction": "Misinformation (Fake)" if pred == 1 else "Not Misinformation (Real)",
        "confidence": confidence,
        "explanation": "Model explanation feature under development."
    }
