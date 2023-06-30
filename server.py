
# app = Flask(__name__)
from flask_app import app
from flask_app.controller import landmark

# @app.route('/')
# def hello_world():
#     return "Hello World!"

#  When the app doesnt work after coming back on for a bit - pipenv install flask  - for no module named Flask

if __name__=="__main__":
    app.run(debug=True)