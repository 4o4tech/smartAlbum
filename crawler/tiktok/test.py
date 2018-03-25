#coding=utf-8
import sys 

def readNum():
    for line in sys.stdin:
        a = line.split()
        num = a[0]
        k = a[1]
    return num,k

    
    
    
def getList(num):

	numList = []
	for line in sys.stdin:

		num = line.split()
		numList = num
	return numList

def diffNum(numList):

	i = 0 
	count = len(numList)
	tem = 0 
	while i< count:
		tem = numList[i]
		


def main():
   num, k = readNum();

   getList(num)
