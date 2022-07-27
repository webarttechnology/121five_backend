import requests
import bs4
import json
requests.packages.urllib3.disable_warnings()
import mysql.connector
DOMAIN_NAME = "https://121five.com/"
mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="121five_db"
)


res = requests.get('https://121five.com/sponsored_content.aspx', verify=False)

soup = bs4.BeautifulSoup(res.text, 'lxml')

#print(soup.find_all('a', id='continue_story'))
count = 0;
for link in soup.find_all('a', id='continue_story'):
    #print(link.get('href'))
    res1 = requests.get('https://121five.com/'+link.get('href'), verify=False)
    soup1 = bs4.BeautifulSoup(res1.text, 'lxml')

    for link1 in soup1.find_all('div', {'class':'article_text'}, limit=1):
        img = soup1.find_all('img', {'class':'article_img'})
        #print(img)
        fileresponse = requests.get(DOMAIN_NAME + img[0]['src'], allow_redirects=True, verify=False)
        loadimage = img[0]['src']
        imagearr = loadimage.split('/')
        if imagearr[3]:
            json_format = json.dumps(['uploads/'+imagearr[3]])
            open(img[0]['src'].rsplit('/', 1)[1], 'wb').write(fileresponse.content)
            mycursor = mydb.cursor()
            sql = "INSERT INTO news_main (title, details, image) VALUES (%s, %s, %s)"
            val = (link.get_text(), link1.get_text(), json_format)
            mycursor.execute(sql, val)
            mydb.commit()
            count += 1
            print(count)
        else:
            print('blank')