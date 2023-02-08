import pandas as pd
import numpy as np
from sklearn import svm
from sklearn import metrics
from IPython.utils import encoding
from sklearn.model_selection import train_test_split
import seaborn as sns
from sklearn.metrics import mean_squared_error
import xgboost as xgb
import matplotlib.pyplot as plt


cols = ["Count", "Hour", "Temp", "Humidity", "Windspeed", "NewTemp"]
df = pd.read_csv("sample-data-new.csv", names=cols, encoding="unicode_escape")
df = df.drop("Temp", axis=1)
print(df)

df.dropna(inplace=True)
print(df)

train, test = train_test_split(df, test_size = 0.2, random_state = 42)

X_train = train.drop(columns=["Count"])
y_train = train["Count"]

X_test = test.drop(columns=["Count"])
y_test = test["Count"]



model_xgb = xgb.XGBRegressor()
model_xgb.fit(X_train, y_train)


print("----------TEST----------")
y_predict = model_xgb.predict(X_test)
loss = model_xgb.score(X_test, y_test)
print("R squared: ",loss)
print("----------TRAIN----------")
loss1 = model_xgb.score(X_train, y_train)
print("R squared: ",loss1)

xgb.plot_importance(model_xgb)
plt.savefig("importance.png")

#seaborn.displot() is a function that is used to create a histogram and/or kernel density estimate of a dataset

sns.displot(df, x="Hour")
plt.savefig("Hour_1.png")

sns.displot(df, x="Humidity")
plt.savefig("Humidity_1.png")

sns.displot(df, x="Windspeed")
plt.savefig("Windspeed_1.png")

sns.displot(df, x="NewTemp")
plt.savefig("Newtemp_1.png")


#seaborn.relplot() is a function that is used to create a scatter plot with varying marker size and/or color


print("Line graph: ")
g= sns.relplot(x="Hour", y="Count",kind="line" ,data=df)
g.figure.autofmt_xdate()
plt.savefig("Hour.png")

print("Line graph: ")
g= sns.relplot(x="Humidity", y="Count",kind="line" ,data=df)
g.figure.autofmt_xdate()
plt.savefig("Humidity.png")

print("Line graph: ")
g= sns.relplot(x="Windspeed", y="Count",kind="line" ,data=df)
g.figure.autofmt_xdate()
plt.savefig("Windspeed.png")

print("Line graph: ")
g= sns.relplot(x="NewTemp", y="Count",kind="line" ,data=df)
g.figure.autofmt_xdate()
plt.savefig("Newtemp.png")
