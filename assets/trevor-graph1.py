
import matplotlib.pyplot as plt





n_groups = 17

years = ('2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018')

membership = (52, 48, 67, 45, 45, 50, 55, 67, 65, 70, 60, 60, 55, 60, 65, 75, 80)



plt.scatter(years, membership, c='g')

plt.title('Membership Numbers over the Years')

plt.xlabel('Years')

plt.ylabel('Memberships')

plt.show()