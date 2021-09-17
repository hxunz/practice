def accum(s):
    output = []
    for count, letter in enumerate(s):
        output.append(letter.upper() + letter.lower()*(count))
    return '-'.join(output)

# best solution


def accum(s):
    return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))
