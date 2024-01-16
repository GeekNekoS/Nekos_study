from pandas import read_csv
from pandas.plotting import scatter_matrix
from matplotlib import pyplot


url = "https://raw.githubusercontent.com/jbrownlee/Datasets/master/iris.csv"
names = ['sepal-length', 'sepal-width', 'petal-length', 'petal-width', 'class']
dataset = read_csv(url, names=names)

# print(dataset)
# print(dataset.head(20))
# print(dataset.describe())
# print(dataset.groupby('class').size())

# dataset.plot(kind='box', subplots=True, layout=(2, 2), sharex=False, sharey=False)
# pyplot.show()

# dataset.hist()
# pyplot.show()

scatter_matrix(dataset)
pyplot.show()
