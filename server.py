from flask import Flask
# app = Flask(__name__)
from flask_app import app
from flask_app.controller import landmark

# @app.route('/')
# def hello_world():
#     return "Hello World!"

if __name__=="__main__":
    app.run(debug=True)