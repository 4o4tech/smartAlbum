
# create by Jimze
# 20/3/2018


from splinter.driver.webdriver.chrome import Options, Chrome
from splinter.browser import Browser
from contextlib import closing
import requests, json, time, re, os, sys
from bs4 import BeautifulSoup
from urllib.request import urlopen
import urllib.request
import pymongo

import downloader


class Parser(object):

	def __init__(self, width = 500, height = 300):
		"""
		解析URL

		抖音 challenge 视频下载，
		内容相似的， 主题一样的视频
		"""
		# 无头浏览器
		chrome_options = Options()
		chrome_options.add_argument('user-agent="Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"')
		self.driver = Browser(driver_name='chrome', executable_path= '/usr/local/bin/chromedriver', options=chrome_options, headless=True)
	
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
		# nickname = []

		user_url = 'https://www.douyin.com/aweme/v1/challenge/aweme/?ch_id=%s&count=%s' % (ch_id, cnum)
		req = requests.get(url = user_url, verify = False)
		html = json.loads(req.text)
		i = 1
		for each in html['aweme_list']:

			#use uri as videos uniqe name 
			#change by jizme
			URI = each['video']['play_addr']['uri']
			video_names.append(URI + '.mp4')
			video_urls.append(each['video']['play_addr']['url_list'][0])
			cha_name.append(each['cha_list'][0]['cha_name'])

		return video_names, video_urls,cha_name




def main():

	"""
	running 

	"""

	parser = Parser()

	ch_id =  '1554129378843650'



	video_names, video_urls,cha_name = parser.get_video_urls(ch_id,'10')

	i = 0



	while i < len(video_names):
		print("url:  " + video_urls[i])
		print("Video Name:  " + video_names[i])
		print("Type:  " + cha_name[i])

		print('\n\n' + '*' * 50)
		i+=1


	#downloads

	# down = Downloader()

	# down.getUrl(video_urls,video_names, ch_id)


	

if __name__ == '__main__':
	main()
