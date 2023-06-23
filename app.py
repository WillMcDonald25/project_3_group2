import numpy as np
import datetime as dt
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, MetaData
from flask import Flask, render_template, jsonify
from flask_cors import CORS, cross_origin

# Setting up the DB
engine = create_engine(r"sqlite:///Data/ILINet.db")

Base = automap_base()
# Reflect the tables
Base.prepare(autoload_with=engine)

# Save the table reference
ILINet = Base.classes.ilinet

# Flask setup
app = Flask(__name__)
cors = CORS(app)

################
# Flask routes
################

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/api")
@cross_origin()
def api():
    "Presents the JSON file"
    
    # Create the session link
    session = Session(engine)

    # Querying the data for jsonifying
    results = session.query(ILINet.REGION, ILINet.YEAR, ILINet.WEEK, 
                            ILINet.PERCENTUNWEIGHTEDILI, ILINet.ILITOTAL,
                            ILINet.NUMOFPROVIDERS, ILINet.TOTALPATIENTS).all()

    # CLose the Session
    session.close()


    # Commiting Values for reading
    data = []
    for region, year, week, perili, ilitot, providers,patients in results:
        data_dict = {}
        data_dict["Region"] = region,
        data_dict["Year"] = year,
        data_dict["Week"] = week,
        data_dict["Percent_Weighted_ILI"] = perili,
        data_dict["ILI_Total"] = ilitot,
        data_dict["Number_of_Providers"] = providers,
        data_dict["Number_of_Patients"] = patients
        data.append(data_dict)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=8000)