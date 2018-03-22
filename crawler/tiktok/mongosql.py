# create by Jimze
# 22/3/2018

import pymongo


class tosql():

	def __init__(self):
		pass

	def connectMongo(self):
 
		db_host,username,passwd = self.db_pwd

		conn = MongoClient(db_host)

		db = conn.get_database("mydb")
		db.authenticate(username, passwd)

		print(db.user)





	def db_pwd(self):
		path = os.path.abspath('/Users/jimzezhang/demo/db.txt')
		# path = os.path.abspath('g:/db.txt')
		dbFile = open(path)
		db= dbFile.readlines()

		db_host = db[0].strip()	
		user = db[1].strip()
		passwd = db[2].strip()
		return (db_host,user,passwd)


	def run():
		self.connectMongo()


def main():
	sql = tosql()

	sql.run()

if __name__ == '__main__':
	main()