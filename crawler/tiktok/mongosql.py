# create by Jimze
# 22/3/2018

import pymongo,os


class tosql():

	def __init__(self):
		pass



	def db_pwd(self):
		path = os.path.abspath('/Users/jimzezhang/demo/db.txt')
		# path = os.path.abspath('g:/db.txt')
		dbFile = open(path)
		db= dbFile.readlines()

		db_host = db[0].strip()	
		user = db[1].strip()
		passwd = db[2].strip()
		return db_host,user,passwd


	def connectMongo(self):
 
		db_host,username,passwd = self.db_pwd()


		# print (db_host,username,passwd)

		conn = pymongo.MongoClient(db_host, username=username, password=passwd,authSource='admin')


		# db = conn.get_database("mydb")
		# db.authenticate(username, passwd)

		db = conn.mydb


		#start insert data into sql
		print("Insert data into sql ")

		return db
		# account = db.get_collection("user")

		# print(account.find_one())

	def insertVideo(self, short_ids,video_names,video_urls,cover_image_urls,cha_name):

		i = 0 
		count = len(short_ids)

		db = self.connectMongo()

		while i < count:
			video = {
				'_id':video_names[i],
				'short_id':short_ids[i],
				'video_url':video_urls[i],
				'cover_image_url':cover_image_urls[i],
				'cha_name':cha_name[i]
			}

			try:
				db.videos.insert(video, continue_on_error=True)

				print( "Successfully insert  " + video_names[i] )

			except pymongo.errors.DuplicateKeyError:
				print( video_names[i] + "  already exist video. ")

			i+=1	

		print('Finished insert video')
