from flask import render_template, request, redirect
from flask_app import app
from flask_app.models import skyroute

import pdb # @DEBUG

shortest_route = 0

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/landmarks', methods=['POST'])
def submit_landmarks():
    start_point = request.form['start_point']
    end_point = request.form['end_point']
    shortest_route = skyroute.get_route(start_point, end_point)
    return redirect('/route')

@app.route("/route")
def show_route():
    
    return render_template('route.html')