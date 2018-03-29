
# create by Jimze
# 20/3/2018


import requests, json, time, re, os, sys
from bs4 import BeautifulSoup

import pymongo

import pandas as pd
import numpy as np

from downloader import Downloader
from mongosql import tosql


  

class Parser(object):

	def __init__(self):

		pass
	
	def get_video_urls(self, ch_id,cnum):
		"""
		获得视频播放地址
		Parameters:
			user_id：查询的用户ID
		Returns:
			video_names: 视频名字列表
			video_urls: 视频链接列表
			nickname: 用户昵称
			cha_name: 视频类型
		"""
		video_names = []
		video_urls = []
		cha_name = []
		# URIs = []
		short_ids = []
		cover_image_urls = []


		user_url = 'https://www.douyin.com/aweme/v1/challenge/aweme/?ch_id=%s&count=%s' % (ch_id, cnum)
		req = requests.get(url = user_url, verify = True)
		html = json.loads(req.text)
		print (user_url)
		i = 1
		for each in html['aweme_list']:

			#use uri as videos uniqe name 
			#change by jizme
			URI = each['video']['play_addr']['uri']
			author = each['author']

			video_names.append(URI)
			video_urls.append(each['video']['play_addr']['url_list'][0])
			cha_name.append(each['cha_list'][0]['cha_name'])
			cover_image_urls.append(each['video']['cover']['url_list'][0])
			short_ids.append(author['short_id'])

		return video_names, video_urls, cha_name, short_ids, cover_image_urls




def getChaId():

	data = pd.read_csv('cha_id.csv')

	cha_id = data['cha_id']
	cnum = data['cnum']

	# i = 0
	# while i < len(cha_id):
	# 	print(str(cha_id[i])  + "   " + str (cnum[i])	 )
	# 	i +=1

	return cha_id, cnum


def main():

	"""
	running 

	"""

	parser = Parser()
	#1553304054213633

	ch_ids, cnums = getChaId()

	# ch_ids = [1553304054213633]
	# cnums = [50]


	i = 0
	while i < len(ch_ids):
		ch_id = ch_ids[i]
		cnum = cnums[i]


		# get url from ajax 
		video_names, video_urls,cha_name,short_ids,cover_image_urls = parser.get_video_urls(str(ch_id), str(cnum))

		#save into sql

		sql = tosql()
		sql.insertVideo(short_ids,video_names,video_urls,cover_image_urls,cha_name)

		#downloads

		# down = Downloader()

		# down.getUrl(video_urls,video_names, ch_id)

		i += 1	

	
	# i = 0
	# while i < len(video_names):
	# 	print("url:  " + video_urls[i])
	# 	print("Video Name:  " + video_names[i])
	# 	print("Type:  " + cha_name[i])

	# 	print('\n\n' + '*' * 50)
	# 	i+=1


def test():
	ch_ids, cnums =  getChaId()

	i = 0
	while i < len(ch_ids):
		ch_id = str(ch_ids[i])
		cnum = str (cnums[i])

		print(ch_id + "   " + cnum)

		i += 1



if __name__ == '__main__':
	main()
	# test()
