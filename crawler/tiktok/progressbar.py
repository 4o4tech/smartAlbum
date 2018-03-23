import sys,time

i = 0
while i < 100:
    k = i + 1
    str = '▌'*(i//2)+' '*((100-k)//2)
    sys.stdout.write('\r'+str+'[%s%%]'%(i+1))
    sys.stdout.flush()
    i += 1
    time.sleep(0.1)