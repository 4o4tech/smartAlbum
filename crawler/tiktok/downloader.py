# create by Jimze
# 22/3/2018

from urllib.request import urlopen
import urllib.request
import os 

class Downloader(object):

	def __init__(self):
		pass

	def getUrl(self,video_urls,video_names,ch_id):
		i = 0 
		count  = len(video_urls)

		path = '/Users/jimzezhang/demo/video/' + ch_id


		while i < count:

			url = video_urls[i]
			name = video_names[i]

			file_path = os.path.join(path, name)

			if not os.path.isfile(file_path):

				f = urllib.request.urlopen(url)

				print("*"*50)
				print("Download   " + str(i) +"  video")

				data = f.read()
				with open(file_path,'wb') as file:
					file.write(data)
				i += 1