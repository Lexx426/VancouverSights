from flask import render_template, request
from flask_app import app
from models import skyroute


@app.route("/")
def index():
    return render_template('index.html')

@app.route('/landmarks', methods=['POST'])
def submit_landmarks():
    "start_point": request.form['start_point']
    "end_point": request.form['end_point']
    get_route(start_point, end_point)