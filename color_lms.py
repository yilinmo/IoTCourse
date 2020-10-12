import numpy as np
import plotly.graph_objects as go
import plotly
import pandas as pd

c = pd.read_csv("color_lms.csv")

fig = go.Figure(data = go.Scatter3d(
    x=c.L, y=c.M, z=c.S,
    marker=dict(
        size=4,
        color=np.linspace(0, .9, 57),
        colorscale='HSV',
    ),
    line=dict(
        color=np.linspace(0, .9, 57),
        colorscale='HSV',
        width=2
    ))
    )

fig.write_html("color_lms.html")
fig.show()
