vowels = ['a', 'e', 'i', 'o', 'u']
n = int(input())
input_list = [list(input()) for _ in range(n)]

def get_vowels(input_text):
  vowels_list = []
  for x in input_text:
    if x.casefold() in vowels:
      vowels_list.append(x)
  if len(vowels_list) == 0:
    return('???')
  vowels_string = ''.join(vowels_list)
  return(vowels_string)

i = 0
while i < n:
	print(get_vowels(input_list[i]))
	i += 1