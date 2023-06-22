import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify


# Setting up the DB
engine = create_engine(r"sqlite:////home/Nonkik589/mysite/Data/ILINet.db")

Base = automap_base()
# Reflect the tables
Base.prepare(autoload_with=engine)

# Save the table reference
ILINet = Base.classes.ilinet

# Flask setup
app = Flask(__name__)

################
# Flask routes
################


@app.route("/")
def home():
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
    app.run(debug=False)