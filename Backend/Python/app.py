from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ضع هنا الـ Routes الخاصة بمشروعك الحقيقي
@app.route('/')
def home():
    return jsonify({"status": "Linker-DV Backend is running"})

if __name__ == '__main__':
    app.run()