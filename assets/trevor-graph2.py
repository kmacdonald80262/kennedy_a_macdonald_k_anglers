
import matplotlib.pyplot as plt 
import numpy as np 

labels = "Komoka", "Oxbow", "Dingman"
sizes = [3, 1,2]
colors = ['darkgoldenrod', 'darkgray', 'gold']
explode = [0, 0.1, 0]

plt.pie(sizes, labels=labels, explode=explode, colors=colors, autopct='%1.1f%%', shadow=True, startangle=140)
plt.axis('equal')

plt.legend(labels, loc=1)
plt.title("Creek Fishing Records 2016")
plt.xlabel("2016")
plt.show()


