import matplotlib.pyplot as plt
import numpy as np

n_groups = 1
rainbow = (150,000)

brown = (80,000)

fig, ax = plt.subplots()
index = np.arange(n_groups)
bar_width = 0.001

opacity = 0.4

ax.bar(index, rainbow, bar_width, alpha=opacity, color='blue', label='Rainbow Trout')
ax.bar(index + bar_width, brown, bar_width, alpha=opacity, color='red', label='Brown Trout')

ax.set_xlabel('Fish Species')
ax.set_ylabel('Number of Eggs (thousands)')
ax.set_title('Eggs by Species')
ax.set_xticks(index + bar_width)
ax.set_xticklabels((''))
ax.legend()

fig.tight_layout()
plt.show()