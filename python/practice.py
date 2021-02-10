#Quiz) 사이트별로 비밀번호를 만들어 주는 프로그램을 작성하시오

#예) http://naver.com
#규칙1 : http:// 부분은 제외 => naver.com
#규칙2 : 처음 만나는 점(.) 이후 부분은 제외 => naver
#규칙3 : 남은 글자 중 처음 세자리 + 글자 갯수 + 글자 내 'e' 갯수 + "!" 로 구성

#url = "http://naver.com"
url = "http://google.com"
f_str = (url[7:])
s_str = (f_str[:5])
password = s_str[:3] + str(len(s_str)) + str(s_str.count("e")) + "!"
print("{}의 비밀번호는 {}입니다!".format(url, password))