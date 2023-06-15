import numpy as np
import datetime as dt
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify

# Setting up the DB
engine = create_engine("sqlite:///../Data/ILINet.db")
conn = engine.connect()

# Reflect the tables
Base = automap_base()
Base.prepare(autoload_with=engine)

# Save the table reference
ILINet = Base.classes.ilinet()

# Flask setup
app = Flask(__name__)


################
# Flask routes
################

@app.route("/")
def home():
    "Presents the JSON file"
    
    # Create the session
    session = Session(engine)

    #