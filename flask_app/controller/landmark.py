from flask import render_template, request, redirect
from flask_app import app
from flask_app.models import skyroute

import pdb # @DEBUG

shortest_route = 0
# shortest_route does not update === so by using the global keyword in where the local variable was used, it updates the global

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/landmarks', methods=['POST'])
def submit_landmarks():
    start_point = request.form['start_point']
    end_point = request.form['end_point']
    global shortest_route
    shortest_route = skyroute.get_route(start_point, end_point)
    print(shortest_route)
    return redirect('/route')

@app.route("/route")
def show_route():
    
    return render_template('route.html', shortest_route = shortest_route)